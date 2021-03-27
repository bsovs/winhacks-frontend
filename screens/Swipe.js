import React, {useEffect, useState} from "react";
import {connect} from 'react-redux';
import {StyleSheet, Text, View, Button} from "react-native";
import SwipeCards from "react-native-swipe-cards-deck";
import Loading from "../components/Loading";
import Card from "../components/Card";
import {cardsFailure, onSwipe} from "../store/actions/swipeActions";
import ProfileNavButton from '../components/navbar-buttons/ProfileNavButton'
import {useNavigation} from "@react-navigation/core";
import firebase from '../firebase.config'
import axios from "../store/axios/axios-config";
import * as Location from "expo-location";
import {locationFailure, locationSuccess} from "../store/actions/locationActions";

const auth = firebase.auth();

function NoMoreCard({text, refresh}) {
    return (
        <View>
            <Text style={styles.cardsText}>{text}</Text>
            <Button onPress={refresh} title="Refresh"/>
        </View>
    );
}

const Swipe = (props) => {
    const navigation = useNavigation();
    const [cards, setCards] = useState();

    useEffect(() => {
        if (!auth.currentUser.email) {
            navigation.push('Landing')
        }
    }, []);

    const getCards = async() => {
        const { status } = await Location.requestPermissionsAsync();
        if (status === 'granted') {
            const location = await Location.getCurrentPositionAsync({});
            axios.post('/homes/fetch', {lat: location.coords.latitude, lon: location.coords.longitude})
                .then(response => {
                    console.log(response.data)
                    setCards(response.data);
                })
                .catch(error => {
                    props.cardsFailure(error)
                });
        } else {
            props.cardsFailure('Permission to access location was denied');
        }
    };

    useEffect(() => {
        (async () => {
            if (!cards) {
                await getCards();
            }
        })();
    }, [props.location]);

    if (!cards && props.error) return (
        <View style={[styles.container]}>
            <Text>{props.error.toString()}</Text>
            <Button onPress={() => getCards()} title="Refresh"/>
        </View>
    );

    if (!cards) return <Loading/>

    const handleYup = (card) => {
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
            <SwipeCards
                cards={cards}
                renderCard={(cardData) => <Card data={cardData}/>}
                keyExtractor={(cardData) => String(cardData.id)}
                renderNoMoreCards={() => <NoMoreCard text="No more cards..." refresh={getCards}/>}
                handleYup={handleYup}
                handleNope={handleNope}
                handleMaybe={handleMaybe}
                hasMaybeAction={true}
                smoothTransition={true}
                stack={true}
                stackDepth={3}
            />
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
        locationLoading: state.loc.loading,
        loading: state.swipe.loading,
        error: state.swipe.error,
        cards: state.swipe.cards,
        location: state.loc.location,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSwipe: (id, rating) => dispatch(onSwipe({id, rating})),
        cardsFailure: (error) => dispatch(cardsFailure(error)),
    };
};

Swipe.navigationOptions = navigationData => {
    return {
        headerRight: () => <ProfileNavButton navigationData={navigationData}/>,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Swipe);