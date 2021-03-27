import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MessageScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Message Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default MessageScreen