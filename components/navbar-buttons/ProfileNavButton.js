import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { HeaderButton } from 'react-navigation-header-buttons'
import { FontAwesome } from '@expo/vector-icons';
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

const ProfileNavButton = ({ navigationData }) => {

    const handleButtonPress = () => {
        console.log('Navigating to Profile');
        navigationData.navigation.push('Profile');
    }

    return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
                title='Add Friend Button'
                iconName='person-circle-sharp'
                onPress={handleButtonPress}
            />
        </HeaderButtons>
    )
}

export default ProfileNavButton