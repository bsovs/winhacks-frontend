import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { HeaderButton } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons';

const CustomHeaderButton = props => {
    return (
        <HeaderButton
            {...props}
            IconComponent={Ionicons}
            iconSize={28}
            color='black'
        />
    )
}

const MessagesNavButton = ({ navigationData }) => {

    const handleButtonPress = () => {
        console.log('Navigating to messages');
        navigationData.navigation.push('Messages');
    }

    return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
                title='Message Screen'
                iconName='md-chatbubble-ellipses-outline'
                onPress={handleButtonPress}
            />
        </HeaderButtons>
    )
}

export default MessagesNavButton