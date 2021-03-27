import { auth } from "firebase";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Layout from "../styles/Layout";
import firebase from '../firebase.config'

const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLoginPressed = async () => {
        if (email && password) {
            const authRes = await firebase.auth().signInWithEmailAndPassword(email, password)
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