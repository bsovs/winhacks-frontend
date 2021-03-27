import React, {useState} from "react";
import {Text, View, Image, SafeAreaView, ScrollView, StyleSheet} from "react-native";
import {uid} from 'react-uid';
import Bullet from "../components/Bullet";
import {useHeaderHeight} from "@react-navigation/stack";
import Layout from "../styles/Layout";
import Colors from "../styles/Colors";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Card({ data }) {
    const headerHeight = useHeaderHeight();
    const [showMore, setShowMore] = useState(false);
    const toggleDetails = () => {
        setShowMore(prevState => !prevState);
    }

    return (
        <View style={[styles.card, {height: Layout.height - headerHeight}]}>
            {
                data.images && data.images.map(url =>
                    <Image
                        key={uid(url)}
                        source={{uri: url}}
                        style={{
                            width: Layout.width,
                            height: (showMore ? Layout.height/2 : Layout.height - headerHeight),
                            borderRadius: styles.card.borderRadius,
                        }}
                    />)
            }
            {showMore ? (
                <SafeAreaView style={{height: Layout.height/2 - headerHeight}}>
                    <Text style={Layout.textHeader}>{data.text}</Text>
                    <Text style={[Layout.textRow, {fontWeight: 'bold'}]}>About</Text>
                    <Text style={[Layout.textRow]}>{data.description || 'n/a'}</Text>
                    <Text style={[Layout.textRow, {fontWeight: 'bold'}]}>Features</Text>
                    <Bullet>lat-lon: ({data.lat}, {data.lon})</Bullet>
                    <Bullet>size: {data.size} sqr. m</Bullet>
                </SafeAreaView>
                )
                : (<Text style={[Layout.title, {position: 'absolute', left: 10}]}>{data.text}</Text>)
            }
            <View style={[Layout.padding, Layout.row, {position: 'absolute', left: 0, right: 0, bottom: 0}]}>
                <View/>
                <Icon
                    onPress={toggleDetails}
                    name={showMore ? "arrow-up" : "arrow-down"}
                    size={40}
                    color={Colors.primaryBg}
                    title={'Details'}
                    accessibilityLabel="Get more property details"
                />
                <View/>
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
                shadowOffset: { height:0, width: 0 },
                shadowOpacity: 0.2,
                shadowRadius: 5,
            },
            android: {
                elevation: 5
            },
        }),
    },
    cardsText: {
        fontSize: 22,
    },
});