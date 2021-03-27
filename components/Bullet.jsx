import React from 'react';
import { Text, View } from 'react-native';
import Layout from "../styles/Layout";

export default function Bullet({ children }) {
    return (
        <View style={{flexDirection: 'row', width: Layout.width*3/4}}>
            <Text>{'\u2022'}</Text>
            <Text style={{flex: 1, paddingLeft: 5}}>{children}</Text>
        </View>
    );
}
