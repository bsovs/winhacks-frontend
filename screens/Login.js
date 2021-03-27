import { auth } from "firebase";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Layout from "../styles/Layout";
import firebase from '../firebase.config'
import { useNavigation } from "@react-navigation/core";

const LoginScreen = () => {

    const navigation = useNavigation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLoginPressed = async () => {
        console.log('logging in')
        try {
            if (email && password) {
                const authRes = await firebase.auth().signInWithEmailAndPassword(email, password)
                if (authRes.user.email) {
                    console.log('succesful sign in')
                    navigation.navigate('Swipe')
                }
                else {
                    console.log('problem logging in')
                }
            }
        }
        catch (error) {
            if (error.code == 'auth/weak-password') {
                console.log('weak password')
                console.log(error.message)
            } else {
                console.log('error')
                console.log(error.message)
            }
        }
    }

    return (
        <View style={styles.screen}>
            <Text>Login Screen</Text>
            <TextInput
                autoCapitalize='none'
                style={Layout.textInput}
                placeholder='email'
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={Layout.textInput}
                placeholder='password'
                secureTextEntry={true}
                autoCapitalize='none'
                onChangeText={(text) => setPassword(text)}
            />
            <Button title='Login' onPress={handleLoginPressed} />
            <View style={{ height: 60 }}></View>
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

export default LoginScreen