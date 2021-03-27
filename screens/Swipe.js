import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from "react-native";
import SwipeCards from "react-native-swipe-cards-deck";
import Loading from "../components/Loading";
import Card from "../components/Card";
import { onSwipe } from "../store/actions/swipeActions";

function StatusCard({ text }) {
    return (
        <View>
            <Text style={styles.cardsText}>{text}</Text>
        </View>
    );
}

const Swipe = (props) => {
    const [cards, setCards] = useState();

    // replace with real remote data fetching
    useEffect(() => {
        if (!cards) {
            // TODO: Call backend for real data
            setTimeout(() => {
                setCards([
                    {
                        id: "198d84d6-7af8-4610-95d0-68fd9d8c6a16",
                        text: "Drake's House. 21 Park Ln Cir",
                        description: "Rapper, singer, songwriter, record producer, and actor, Drake, is building this 21,000 sqft Versailles-inspired estate in Toronto's exclusive Bridle Path neighborhood. The property will include a basketball court, gym, outdoor projection screen, both champagne and wine cellars, screening room, spa and massage areas, and a basement 'jersey museum' for his sports collectables.",
                        images: ["https://firebasestorage.googleapis.com/v0/b/winhacks-308216.appspot.com/o/assets%2Fdrake_1.jpg?alt=media",
                            'https://beta.ctvnews.ca/content/dam/cp24/images/2019/9/17/1_4596677.jpg',
                            'https://i.ytimg.com/vi/VUPduqWo7hI/maxresdefault.jpg',
                            'https://media.architecturaldigest.com/photos/5e8b3793ad4f6600086a9ff0/master/w_2550,h_2037,c_limit/AD0520_DRAKE_14.jpg'
                        ],
                        address: '21 Park Ln Cir',
                        lat: 43.7341853,
                        lon: -79.3748936,
                        size: 21000,
                    },
                    {
                        id: '7ca98e65-b34f-4a22-ad06-e1266e2c0f01',
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
                    {
                        id: '70e8ddc3-258b-47b2-b0d5-22433fda1368',
                        text: "Courgette"
                    },
                    {
                        id: '70d4428d-c5ec-49d6-a59e-f72513d57482',
                        text: "Blueberry"
                    },
                    {
                        id: 'c13e0547-4512-4e5d-a474-a6fcdc813d35',
                        text: "Umm..."
                    },
                    {
                        id: '02d44f17-7962-4bfd-933c-7e606df69283',
                        text: "orange"
                    },
                ]);
            }, 3000);
        }
    }, [cards]);

    if (!cards) return <Loading />

    const handleYup = (card) => {
        console.log(card);
        props.onSwipe(card.id, 1.0);
        return true;
    }
    const handleNope = (card) => {
        props.onSwipe(card.id, 0.0);
        return true;
    }
    const handleMaybe = (card) => {
        props.onSwipe(card.id, 0.5);
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

const mapStateToProps = state => {
    return {
        loading: state.swipe.loading,
        error: state.swipe.error,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSwipe: (id, rating) => dispatch(onSwipe({ id, rating })),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Swipe);