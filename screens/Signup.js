import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { Button, Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import firebase from '../firebase.config'
import Colors from "../styles/Colors";
import Layout from "../styles/Layout";
import axios from "../store/axios/axios-config";

const auth = firebase.auth()

const SignupScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
        console.log('checking if logged in')
        if (auth.currentUser && auth.currentUser.email) {
            navigation.navigate('Swipe')
        }
    }, [])

    const signInWithEmail = async () => {
        console.log('signing in with email')
        if (email && password) {
            try {
                const authRes = await auth.createUserWithEmailAndPassword(email, password)

                if (authRes.user.email) {
                    axios.post('/profiles/new')
                        .then(response => {
                            console.log('successful sign in')
                            navigation.navigate('Swipe')
                        })
                        .catch(error => {
                            console.log(error)
                        });
                }
                else {
                    console.log('no email')
                }
            }
            catch (error) {
                if (error.code == 'auth/weak-password') {
                    console.log('weak password')
                    alert(error.message)
                } else {
                    console.log('error')
                    alert(error.message)
                }
            }
        }
        else {
            alert('Please enter both email and password')
            console.log('no email/password')
        }
    }

    const handleKeyboardDismiss = () => {
        Keyboard.dismiss()
    }

    return (
        <View style={styles.screen}>
            <View>
                <Image
                    height={75}
                    width={75}
                    style={{ height: 75, width: 75 }}
                    source={require('../assets/house_icon_inverse.png')}
                />
            </View>
            <View style={{ height: 10 }} />
            <KeyboardAvoidingView>
                <TextInput
                    autoCapitalize='none'
                    style={Layout.textInput}
                    placeholder='email'
                    onChangeText={(text) => setEmail(text)} />
                <TextInput
                    style={Layout.textInput}
                    placeholder='password'
                    secureTextEntry={true}
                    autoCapitalize='none'
                    onChangeText={(text) => setPassword(text)} />
                <TextInput
                    style={Layout.textInput}
                    placeholder='confirm password'
                    secureTextEntry={true}
                />
                <View style={{ height: 10 }} />
                <View style={Layout.landingButton}>
                    <Button title='Sign Up' color={Colors.red} onPress={signInWithEmail} />
                </View>
            </KeyboardAvoidingView>
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

export default SignupScreen