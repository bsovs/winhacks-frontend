import React from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from "../styles/Colors";

export default function Body({ children }) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
});