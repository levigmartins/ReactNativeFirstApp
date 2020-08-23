import React from 'react';
import { StyleSheet, Text, View, Image } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import { FontAwesome as Icon } from "@expo/vector-icons";
import Footer from '../components/Footer'

const Contato = ({ navigation }: { navigation: any }) => {
    return (
        <View style={{flex: 1}}>
            {/* CONTACT INFO */}
            <View style={styles.container}>
                <View style={[{marginTop: 20}, styles.containerIn]}>
                    <Icon name="globe" size={30} color="#ffffff"/>
                    <Text style={styles.text}>https://www.nobugs.com.br</Text>
                </View>
                <View style={[{marginTop: 20}, styles.containerIn]}>
                    <Icon name="phone-square" size={30} color="#ffffff"/>
                    <Text style={styles.text}>(31) 3612-6397</Text>
                </View>
                <View style={[{marginTop: 20}, styles.containerIn]}>
                    <Icon name="location-arrow" size={30} color="#ffffff"/>
                    <Text style={styles.text}>Av. P.H. Rolfs S/n, LBI - 2º andar,</Text>
                </View>
                <View style={styles.containerIn}>
                    <Text style={styles.text2}>Campus Universitário, Viçosa - MG</Text>
                </View>
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
        paddingTop: 30,
        paddingLeft: 30,
    },
    containerIn: {
        backgroundColor: '#0075C9',
        flexDirection: "row",
    },
    text: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 18,
        marginLeft: 30
    },
    text2: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 17,
        marginLeft: 50
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