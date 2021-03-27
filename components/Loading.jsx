import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import Colors from "../styles/Colors";
import Layout from "../styles/Layout";

export default function Loading() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={Colors.primaryText} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primaryBg,
        alignItems: 'center',
        justifyContent: 'center',
        height: Layout.height,
        width: Layout.width,
    },
});