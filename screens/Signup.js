import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import firebase from '../firebase.config'
import Layout from "../styles/Layout";

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
                    console.log('succesful sign in')
                    navigation.navigate('Swipe')
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
            console.log('no email/password')
        }
    }

    const handleKeyboardDismiss = () => {
        Keyboard.dismiss()
    }

    return (
        <View style={styles.screen}>
            <Text>Sign Up</Text>
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
                <Button title='Sign Up' onPress={signInWithEmail} />
            </KeyboardAvoidingView>
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

export default SignupScreen