import { auth } from "firebase";
import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import Layout from "../styles/Layout";
import Colors from "../styles/Colors";
import firebase from '../firebase.config'
import { useNavigation } from "@react-navigation/core";
import axios from "../store/axios/axios-config";

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
                    axios.post('/profiles/new')
                        .catch(_ => null)
                        .finally(() => {
                            navigation.navigate('Swipe');
                        });
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
            <View>
                <Image
                    height={75}
                    width={75}
                    style={{ height: 75, width: 75 }}
                    source={require('../assets/house_icon_inverse.png')} />
            </View>
            <View style={{ height: 10 }} />
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
            <View style={{ height: 10 }} />
            <View style={Layout.landingButton}>
                <Button title='Login' color={Colors.red} onPress={handleLoginPressed} />
            </View>
            <View style={{ height: 100 }}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: Colors.red,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default LoginScreen