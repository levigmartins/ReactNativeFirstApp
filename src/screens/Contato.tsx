import React from 'react';
import { StyleSheet, Text, View, Image } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import { FontAwesome as Icon } from "@expo/vector-icons";
import Footer from '../Footer'

const Contato = ({ navigation }: { navigation: any }) => {
    return (
        <View style={{flex: 1}}>
            {/* CONTACT INFO */}
            <View style={styles.container}>
                <Icon name="globe" size={30} color="#ffffff"/>
                <Text style={styles.text}>https://www.nobugs.com.br</Text>
            </View>

            {/* MAP */}
            <View style={styles.mapContainer}>
            <MapView
                style={styles.map}
                region={{
                    latitude: -20.762771,
                    longitude: -42.866969,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
            >
                {/* NB LOGO MARKER */}
                <Marker
                    coordinate={{
                        latitude: -20.762771,
                        longitude: -42.866969,
                    }}
                    title={"No Bugs"}
                >
                    <Image
                        style={{height: 25, width: 28}}
                        source={require("../static/img/proibidao_azul.png")}
                        resizeMode="contain"
                    />
                </Marker>
            </MapView>
            </View>
            <Footer/>
        </View>
)}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0075C9',
        flexDirection: "row",
        paddingTop: 30,
        paddingLeft: 30,
    },
    text: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 18,
        marginLeft: 30
    },
    map: {
        width: "100%",
        height: "100%"
    },
    mapContainer: {
        flex: 1,
        width: "100%",
        borderRadius: 10,
        overflow: 'hidden',
    }
});

export default Contato;