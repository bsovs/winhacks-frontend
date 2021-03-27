import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import firebase from '../firebase.config'

const auth = firebase.auth()

const ProfileScreen = () => {

    const navigation = useNavigation()

    const handleLogOut = async () => {
        await auth.signOut()
        navigation.navigate('Landing')
    }

    return (
        <View >
            <Text>Profile Screen</Text>
            <Button title='Log Out' onPress={handleLogOut} />
        </View>
    );
}



export default ProfileScreen