import React from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from "../styles/Colors";
import {useHeaderHeight} from "@react-navigation/stack";

export default function Body({ children }) {
    const headerHeight = useHeaderHeight();
    return (
        <View>
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