import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Swipe from './screens/Swipe'
import ProfileScreen from './screens/Profile'
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function ConfiguredApp() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Swipe} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default ConfiguredApp