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
        console.log(card);
        props.onSwipe(card.id, 1.0);
    }
    const handleNope = (card) => {
        props.onSwipe(card.id, 0.0);
    }
    const handleMaybe = (card) => {
        props.onSwipe(card.id, 0.5);
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

Swipe.navigationOptions = navigationData => {
    return {
        headerRight: () => <ProfileNavButton navigationData={navigationData} />,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Swipe);