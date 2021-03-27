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
        />
    )
}

const AddFriendButton = ({ navigationData }) => {

    const handleButtonPress = () => {
        console.log('adding friend');
    }

    return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
                title='Add Friend Button'
                iconName='ios-add'
                onPress={handleButtonPress}
            />
        </HeaderButtons>
    )
}

export default AddFriendButton