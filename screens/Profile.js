import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import firebase from '../firebase.config'
import Layout from "../styles/Layout";
import Colors from "../styles/Colors";

const auth = firebase.auth()

const ProfileScreen = () => {

    const navigation = useNavigation()

    const handleLogOut = async () => {
        await auth.signOut()
        navigation.navigate('Landing')
    }

    return (
        <View style={[Layout.container, Layout.padding, {alignItems: "center", justifyContent: "flex-start"}]}>
            <View style={[Layout.inverseButton]}>
                <Button title='Logout' color={Colors.white} onPress={handleLogOut} />
            </View>
        </View>
    );
}



export default ProfileScreen