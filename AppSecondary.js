import { useNavigation } from '@react-navigation/core';
import React from 'react';
import ConfiguredApp from './ConfigureApp';
import firebase from './firebase.config'

const auth = firebase.auth()

const AppSecondary = () => {

    return (
        <ConfiguredApp />
    )
}


export default AppSecondary