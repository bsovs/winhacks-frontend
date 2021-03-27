import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import SwipeCards from "react-native-swipe-cards-deck";
import Loading from "../components/Loading";
import Layout from "../styles/Layout";
import {uid} from 'react-uid';
import Colors from "../styles/Colors";
import Bullet from "../components/Bullet";

function Card({ data }) {
    return (
        <View style={[styles.card]}>
            {
                data.images && data.images.map(url =>
                    <Image
                        key={uid(url)}
                        source={{uri: url}}
                        style={{
                            width: Layout.width,
                            height: Layout.height/2,
                            borderRadius: styles.card.borderRadius,
                        }}
                    />)
            }
            <Text>{data.text}</Text>
            <Text style={{flexDirection: 'row', width: Layout.width*3/4}}>{data.description}</Text>
            <Text style={{flexDirection: 'row', width: Layout.width*3/4}}>Features</Text>
            <Bullet>lat-lon: ({data.lat}, {data.lon})</Bullet>
            <Bullet>size: {data.size} sqr. m</Bullet>
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
    // TODO: Change this to our view
    const [cards, setCards] = useState();

    // replace with real remote data fetching
    useEffect(() => {
        if(!cards) {
            // TODO: Call backend for real data
            setTimeout(() => {
                setCards([
                    {
                        text: "Drake",
                        description: "The kids crib. The one and only!",
                        images: ["https://firebasestorage.googleapis.com/v0/b/winhacks-308216.appspot.com/o/assets%2Fdrake_1.jpg?alt=media"],
                        lat: 40.44,
                        lon: 23.55,
                        size: 11000,
                    },
                    {
                        text: "N/A",
                        description: "Nothing here...",
                        images: ["https://firebasestorage.googleapis.com/v0/b/winhacks-308216.appspot.com/o/assets%2Fsample.jpg?alt=media"],
                        lat: 41.44,
                        lon: 245.55,
                        size: 1000,
                    },
                    {text: "Courgette"},
                    {text: "Blueberry"},
                    {text: "Umm..."},
                    {text: "orange"},
                ]);
            }, 3000);
        }
    }, [cards]);

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
        <View style={styles.container}>
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