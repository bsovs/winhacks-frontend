import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import SwipeCards from "react-native-swipe-cards-deck";
import Loading from "../components/Loading";
import Layout from "../styles/Layout";
import { uid } from 'react-uid';
import Colors from "../styles/Colors";
import Bullet from "../components/Bullet";
import { useHeaderHeight } from "@react-navigation/stack";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";

function Card({ data }) {
    const headerHeight = useHeaderHeight();

    const [imageIndex, setImageIndex] = useState(0)

    const incrementImageIndex = () => {
        if (data.images && data.images.length > 0) {
            if (imageIndex < data.images.length - 1) {
                setImageIndex(imageIndex + 1)
            }
            else if (imageIndex === data.images.length - 1) {
                setImageIndex(0)
            }
        }

    }

    const handleLeftSideTap = () => {

    }

    const handleRightSideTap = () => {
        console.log('right side pressed')
        incrementImageIndex()
    }

    return (
        <View style={[styles.card, { height: Layout.height - headerHeight }]}>
            {
                data.images && data.images.length > 0 &&
                <View style={styles.tapContainer}>
                    <TouchableWithoutFeedback style={styles.leftCard}
                        onPress={() => console.log('testing')}
                    >
                        <Button title="Testing" color="blue" onPress={() => console.log('testing')} />
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback style={styles.rightCard}
                        onPress={() => console.log('testing')}
                    >
                        <Button title="Testing" color="blue" onPress={() => console.log('testing')} />
                    </TouchableWithoutFeedback>
                </View>

            }
            {/* <Image
                key={uid(data.images[imageIndex])}
                source={{ uri: data.images[imageIndex] }}

                style={{
                    width: Layout.width,
                    height: Layout.height / 2,
                    borderRadius: styles.card.borderRadius,
                }}
            /> */}
            <Text style={Layout.textHeader}>{data.text}</Text>
            <Text style={[Layout.textRow, { fontWeight: 'bold' }]}>About</Text>
            <Text style={[Layout.textRow]}>{data.description || 'n/a'}</Text>
            <Text style={[Layout.textRow, { fontWeight: 'bold' }]}>Features</Text>
            <Bullet>lat-lon: ({data.lat}, {data.lon})</Bullet>
            <Bullet>size: {data.size} sqr. m</Bullet>
            <Button title="Testing" onPress={() => console.log('testing')} />
        </View>
    );
}

function StatusCard({ text }) {
    return (
        <View>
            <Text style={styles.cardsText}>{text}</Text>
        </View>
    );
}

export default function Swipe() {
    const [cards, setCards] = useState();

    // replace with real remote data fetching
    useEffect(() => {
        if (!cards) {
            // TODO: Call backend for real data
            setTimeout(() => {
                setCards([
                    {
                        text: "Drake",
                        description: "The kids crib. The one and only!",
                        images: ["https://firebasestorage.googleapis.com/v0/b/winhacks-308216.appspot.com/o/assets%2Fdrake_1.jpg?alt=media",
                            'https://beta.ctvnews.ca/content/dam/cp24/images/2019/9/17/1_4596677.jpg',
                            'https://i.ytimg.com/vi/VUPduqWo7hI/maxresdefault.jpg',
                            'https://media.architecturaldigest.com/photos/5e8b3793ad4f6600086a9ff0/master/w_2550,h_2037,c_limit/AD0520_DRAKE_14.jpg'
                        ],
                        address: '21 Park Ln Cir',
                        lat: 43.835180,
                        lon: -79.439360,
                        size: 11000,
                    },
                    {
                        text: "N/A",
                        description: "Nothing here...",
                        images:
                            ["https://cdn.realtor.ca/listing/TS637505577707330000/reb82/highres/7/c5139067_2.jpg",
                                'https://cdn.realtor.ca/listing/TS637505577706130000/reb82/highres/7/c5139067_1.jpg',
                                'https://cdn.realtor.ca/listing/TS637505577707770000/reb82/highres/7/c5139067_5.jpg',
                                'https://cdn.realtor.ca/listing/TS637505577706400000/reb82/highres/7/c5139067_11.jpg',
                                'https://cdn.realtor.ca/listing/TS637505577706600000/reb82/highres/7/c5139067_13.jpg',
                                'https://cdn.realtor.ca/listing/TS637505577706700000/reb82/highres/7/c5139067_14.jpg',
                            ],
                        address: '61 THE BRIDLE PATH',
                        cost: 16880000,
                        lat: -79.371990,
                        lon: 245.55,
                        size: 1000,
                    },
                    { text: "Courgette" },
                    { text: "Blueberry" },
                    { text: "Umm..." },
                    { text: "orange" },
                ]);
            }, 3000);
        }
    }, [cards]);

    if (!cards) return <Loading />

    const handleYup = (card) => {
        return true;
    }
    const handleNope = (card) => {
        return true;
    }
    const handleMaybe = (card) => {
        return true;
    }

    return (
        <View style={[styles.container]}>
            {cards ? (
                <SwipeCards
                    cards={cards}
                    renderCard={(cardData) => <Card data={cardData} />}
                    keyExtractor={(cardData) => String(cardData.text)}
                    renderNoMoreCards={() => <StatusCard text="No more cards..." />}
                    handleYup={handleYup}
                    handleNope={handleNope}
                    handleMaybe={handleMaybe}
                    hasMaybeAction={true}
                    smoothTransition={true}
                    stack={true}
                    stackDepth={3}
                />
            ) : (
                <Loading />
            )}
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
    cardsText: {
        fontSize: 22,
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
        backgroundColor: 'pink',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 450,
        flexDirection: 'row',

    }

});