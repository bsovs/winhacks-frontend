import { useNavigation } from "@react-navigation/core";
import React, { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Dimensions } from 'react-native';
import firebase from '../firebase.config'

const auth = firebase.auth()

const LandingScreen = () => {

    const navigation = useNavigation()

    useEffect(() => {
        console.log('[Landing] checking if logged in')
        if (auth.currentUser && auth.currentUser.email) {
            navigation.navigate('Swipe')
        }
    }, [])

    const handleLoginPressed = () => {
        // navigate
        console.log('navigate')
        navigation.navigate('Login')
    }

    const handleSignupPressed = () => {
        // navigate
        navigation.navigate('Signup')
    }

    return (
        <View style={styles.screen}>
            <Text>Meant To Be</Text>
            <Button title='Login' onPress={handleLoginPressed} />
            <Button title='Sign Up' onPress={handleSignupPressed} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})


export default LandingScreen