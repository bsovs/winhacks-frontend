import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Swipe from './screens/Swipe'
import Message from './screens/Message'
import Profile from './screens/Profile'
import Login from './screens/Login'
import Signup from './screens/Signup'
import Landing from './screens/Landing'
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from "./styles/Colors";
import Layout from "./styles/Layout";
import ProfileNavButton from './components/navbar-buttons/ProfileNavButton'
import MessagesNavButton from './components/navbar-buttons/MessagesNavButton'

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();



const ConfiguredApp = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Landing"
                component={Landing}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Signup"
                component={Signup}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Swipe" component={Swipe}
                options={(navigationData) => ({
                    headerTitle: 'Logo here',
                    headerLeft: () => <ProfileNavButton navigationData={navigationData} />,
                    headerRight: () => <MessagesNavButton navigationData={navigationData} />,
                })}
            />
            <Stack.Screen name="Refresh" component={Swipe}
                options={({ navigation }) => ({
                    headerTitle: '',
                    headerLeft: null,
                    headerRight: () => <ProfileNavButton navigationData={navigation} />,
                })}
            />
            <Stack.Screen
                name="Messages"
                component={Message}

            />
            <Stack.Screen
                name="Profile"
                component={Profile}
            />
        </Stack.Navigator>
    );
}

export default ConfiguredApp

const NavButtons = ({ navigation }) => {
    return (<View style={[Layout.row, { width: Layout.width }]}>
        <View />
        <Icon
            onPress={() => navigation.navigate('Home')}
            name="home"
            size={30}
            color={Colors.black}
            style={{ margin: 'auto' }}
        />
        <Icon
            onPress={() => navigation.navigate('Refresh')}
            name="user"
            size={28}
            color={Colors.black}
            style={{ margin: 'auto' }}
        />
        <Icon
            onPress={() => navigation.navigate('Refresh')}
            name="gear"
            size={28}
            color={Colors.black}
            style={{ margin: 'auto' }}
        />
        <View />
    </View>);
}