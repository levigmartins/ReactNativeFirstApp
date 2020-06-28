import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home'
import EJ from './screens/Ej'

const Stack = createStackNavigator();

export default function () {
    return (<NavigationContainer>
        <Stack.Navigator initialRouteName={"home"} headerMode={"none"}>
            <Stack.Screen component={HomeScreen} name="home" />
            <Stack.Screen component={EJ} name="ej" />
        </Stack.Navigator>
    </NavigationContainer>)
}