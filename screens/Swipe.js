import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import SwipeCards from "react-native-swipe-cards-deck";
import Loading from "../components/Loading";
import Layout from "../styles/Layout";
import {uid} from 'react-uid';

function Card({ data }) {
    return (
        <View style={[styles.card, { backgroundColor: data.backgroundColor }]}>
            {
                data.images && data.images.map(url =>
                    <Image
                        key={uid(url)}
                        source={{uri: url}}
                        style={{width: Layout.width, height: Layout.height/2}}
                    />)
            }
            <Text>{data.text}</Text>
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
        setTimeout(() => {
            setCards([
                { text: "Tomato", backgroundColor: "red", images:["https://firebasestorage.googleapis.com/v0/b/winhacks-308216.appspot.com/o/assets%2Fdrake_1.jpg?alt=media"] },
                { text: "Aubergine", backgroundColor: "purple", images:["https://firebasestorage.googleapis.com/v0/b/winhacks-308216.appspot.com/o/assets%2Fsample.jpg?alt=media"] },
                { text: "Courgette", backgroundColor: "green" },
                { text: "Blueberry", backgroundColor: "blue" },
                { text: "Umm...", backgroundColor: "cyan" },
                { text: "orange", backgroundColor: "orange" },
            ]);
        }, 3000);
    }, []);

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
                <StatusCard text="Loading..." />
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
    },
    cardsText: {
        fontSize: 22,
    },
});