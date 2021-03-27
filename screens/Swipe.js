import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import SwipeCards from "react-native-swipe-cards-deck";
import Loading from "../components/Loading";
import Layout from "../styles/Layout";
import Colors from "../styles/Colors";
import Card from "../components/Card";

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
            {cards && (
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
    cardsText: {
        fontSize: 22,
    },
});