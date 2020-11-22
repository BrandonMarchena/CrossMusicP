import React, {useState, useEffect} from 'react';
import {
SafeAreaView,
StyleSheet,
ScrollView,
View,
Text,
StatusBar,
Linking,
} from 'react-native';
import axios from 'axios';
import {SPOTIFY_CLIENT_SECRET} from '@env'

const Spotify_section = () => {


    return (
        <>
            <Text>Spotify Secction</Text>
            <Text>{SPOTIFY_CLIENT_SECRET}</Text>
        </>
    );
}
 
export default Spotify_section;