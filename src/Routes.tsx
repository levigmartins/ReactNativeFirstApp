import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home'
import Ej from './screens/Ej'
import Contato from './screens/Contato'
import Pres from './screens/Presidência'

const Stack = createStackNavigator();

export default function () {
    return (<NavigationContainer>
        <Stack.Navigator initialRouteName={"home"} headerMode={"screen"}>
            <Stack.Screen component={HomeScreen} name="Home" options={{headerShown: false}}/>
            <Stack.Screen component={Ej} name="ej" options={{title: "Sobre Nós", headerTitleAlign: "center"}}/>
            <Stack.Screen component={Contato} name="Contato" options={{title: "Onde Nos Encontrar",
             headerTitleAlign: "center"}}/>
             <Stack.Screen component={Pres} name="pres" options={{title: "Presidência", headerTitleAlign: "center"}}/>
        </Stack.Navigator>
    </NavigationContainer>)
}