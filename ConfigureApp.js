import 'react-native-gesture-handler';
import React, { useEffect } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Swipe from './screens/Swipe'
import Message from './screens/Message'
import Profile from './screens/Profile'
import Login from './screens/Login'
import Signup from './screens/Signup'
import Landing from './screens/Landing'
import { createStackNavigator } from '@react-navigation/stack';
import ProfileNavButton from './components/navbar-buttons/ProfileNavButton'
import MessagesNavButton from './components/navbar-buttons/MessagesNavButton'
import ChatWindow from "./screens/ChatWindow";
import { Image } from 'react-native';
import Colors from './styles/Colors'

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const { Screen } = Stack

const ConfiguredApp = (props) => {

    const iconDimension = 36

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
                    headerTitle: <Image
                        height={iconDimension}
                        width={iconDimension}
                        style={{ height: iconDimension, width: iconDimension }}
                        source={require('./assets/house_icon_red.png')}
                    />,
                    headerLeft: () => <ProfileNavButton navigationData={navigationData} />,
                    headerRight: () => <MessagesNavButton navigationData={navigationData} />,
                })}
            />
            <Stack.Screen name="Refresh" component={Swipe}
                options={({ navigation }) => ({
                    headerTitle: <Image
                        height={iconDimension}
                        width={iconDimension}
                        style={{ height: iconDimension, width: iconDimension }}
                        source={require('./assets/house_icon_red.png')}
                    />,
                    headerLeft: null,
                    headerRight: () => <ProfileNavButton navigationData={navigation} />,
                })}
            />
            <Screen
                name="Messages"
                component={Message}
                options={{
                    headerTintColor: Colors.red,
                    headerTitleStyle: {
                        color: 'black'
                    }
                }}
            />
            <Stack.Screen
                name="Chat"
                component={ChatWindow}

            />
            <Stack.Screen
                name="Profile"
                component={Profile}
            />
        </Stack.Navigator>
    );
}

export default ConfiguredApp;