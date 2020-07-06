import React from 'react';
import { StyleSheet, useWindowDimensions, View } from "react-native";
import Image from 'react-native-scalable-image';

export default function Footer(){
    const screen = useWindowDimensions();
    return (
        <View>
            <Image style={styles.footer}
                width={screen.width/2}
                source={require('../src/static/img/logo_nb.png')}
            />
        </View>
)}

const styles = StyleSheet.create({
    footer: {
        alignSelf: "center",
        margin: 15,
    }
})