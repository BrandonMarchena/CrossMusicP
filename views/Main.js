import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from './Home';
import Spotify from './Spotify_section';
import Soundcloud from './Soundcloud_section';

const Main = () => {

    const Tab = createMaterialTopTabNavigator();

    return (
        <>
            <Tab.Navigator screenOptions initialRouteName="Home" screenOptions={{ headerTitleStyle: { fontFamily: 'Ubuntu-Regular', fontWeight: 'bold' } }}>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Spotify" component={Spotify} />
                <Tab.Screen name="Soundcloud" component={Soundcloud} />
            </Tab.Navigator>
        </>
    );
}
 
export default Main;