import React, { useState } from "react";
import { Text, View, Image, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Button } from "react-native";
import { uid } from 'react-uid';
import Bullet from "../components/Bullet";
import { useHeaderHeight } from "@react-navigation/stack";
import Layout from "../styles/Layout";
import Colors from "../styles/Colors";
import Icon from "react-native-vector-icons/FontAwesome";
import {AntDesign, Entypo} from "react-native-vector-icons";

export default function Card({ data }) {
    const headerHeight = useHeaderHeight();
    const [showMore, setShowMore] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);

    const toggleDetails = () => {
        setShowMore(prevState => !prevState);
    }

    const incrementImageIndex = () => {
        if (data.images && data.images.length > 0) {
            if (imageIndex < data.images.length - 1) {
                setImageIndex(prevIndex => prevIndex + 1)
            }
            else if (imageIndex >= data.images.length - 1) {
                setImageIndex(0)
            }
        }
    }
    const decrementImageIndex = () => {
        if (data.images && data.images.length > 0) {
            if (imageIndex > 0) {
                setImageIndex(prevIndex => prevIndex - 1)
            }
            else if (imageIndex <= 0) {
                setImageIndex(data.images.length - 1)
            }
        }
    }

    const handleRightSideTap = () => {
        console.log('right side pressed')
        incrementImageIndex()
    }

    const handleLeftSideTap = () => {
        console.log('right side pressed')
        decrementImageIndex()
    }

    return (
        <View style={[styles.card, { height: Layout.height - headerHeight }]}>
            {
                !showMore && data.images && data.images.length > 0 &&
                <Image
                    key={uid(data.images[imageIndex])}
                    source={{ uri: data.images[imageIndex] }}

                    style={{
                        width: Layout.width,
                        height: Layout.height / 2,
                        borderRadius: styles.card.borderRadius,
                    }}
                />
            }
                <SafeAreaView style={{ height: Layout.height / (showMore ? 1 : 2) - headerHeight }}>
                    <ScrollView>
                        <Text style={[Layout.title, Layout.textHeader, {paddingLeft: 0}]}>{data.title}</Text>
                        <Text style={Layout.textHeader}>Price: ${data.price}</Text>

                        <Text style={[Layout.textRow, { fontWeight: 'bold' }]}>Features</Text>
                        <Bullet>size: {data.surface_total_in_m2} sqr. m</Bullet>
                        <Bullet>rooms: {data.rooms}</Bullet>
                        <Bullet>location: {data.state_name}, {data.country_name}</Bullet>
                        <Bullet>lat-lon: ({data.lat}, {data.lon})</Bullet>
                        <Bullet>type: {data.property_type}</Bullet>
                        <Bullet>listed on: {Date(data.created_on)}</Bullet>

                        {
                            showMore && (<>
                                <Text style={[Layout.textRow, Layout.textHeader, { fontWeight: 'bold' }]}>About</Text>
                                <Text style={[Layout.textRow]}>{data.description || 'n/a'}</Text>
                            </>)
                        }
                    </ScrollView>
                </SafeAreaView>
            {
                !showMore && data.images && data.images.length > 0 &&
                <View style={[styles.tapContainer, { height: Layout.height / 2  }]}>
                    <View style={styles.leftSide}>
                        <TouchableOpacity onPress={handleLeftSideTap}
                            style={{ height: '100%' }}
                        >
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rightSide}>
                        <TouchableOpacity onPress={handleRightSideTap}
                            style={{ height: '100%' }}
                        >
                        </TouchableOpacity>
                    </View>
                </View>
            }
            <View style={[Layout.padding, Layout.row, { position: 'absolute', left: 0, right: 0, bottom: 0 }]}>
                <View />
                {!showMore ? (
                        <Entypo name="info-with-circle" size={40}
                                onPress={toggleDetails}
                                color={Colors.primaryBg}
                                accessibilityLabel="Get more property details"
                        />)
                    : (
                        <AntDesign name="closecircleo" size={40}
                                   onPress={toggleDetails}
                                   color={Colors.primaryBg}/>
                    )
                }
                <View />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    card: {
        justifyContent: "flex-start",
        alignItems: "center",
        width: Layout.width,
        height: Layout.height,
        backgroundColor: Colors.primaryGray,
        borderRadius: 10,
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0,0,0, .7)',
                shadowOffset: { height: 0, width: 0 },
                shadowOpacity: 0.2,
                shadowRadius: 5,
            },
            android: {
                elevation: 5
            },
        }),
    },
    leftCard: {
        flex: 10,
        backgroundColor: 'red'
    },
    rightCard: {
        flex: 10,
        backgroundColor: 'blue',
        alignSelf: 'stretch',
    },
    tapContainer: {
        width: Layout.width,
        flexDirection: 'row',
        position: 'absolute',
    },
    leftSide: {
        flex: 1,
    },
    rightSide: {
        flex: 1,
    },
    cardsText: {
        fontSize: 22,
    },
});