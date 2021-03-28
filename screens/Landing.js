import { useNavigation } from "@react-navigation/core";
import React, { useEffect } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { Dimensions } from 'react-native';
import Colors from '../styles/Colors'
import firebase from '../firebase.config'
import Layout from "../styles/Layout";

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
            <View>
                <Image
                    height={100}
                    width={100}
                    style={{ height: 100, width: 100 }}
                    source={require('../assets/house_icon_inverse.png')} />
            </View>
            <View style={{ height: 30 }} />
            <View style={Layout.landingButton}>
                <Button style={styles.landingButton} title='Login' color={Colors.red} onPress={handleLoginPressed} />
            </View>
            <View style={{ height: 20 }} />
            <View style={Layout.landingButton}>
                <Button title='Sign Up' color={Colors.red} onPress={handleSignupPressed} />
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: Colors.red,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})


export default LandingScreen