import React from 'react';
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { FontAwesome as Icon } from "@expo/vector-icons";

const Ej = ({ navigation }: { navigation: any }) => {
  return <View style={styles.container}>
        <Text style={styles.title}>Sobre Nós</Text>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#0075C9',
    },
    statusbar: {
        backgroundColor: "#ffffff",
    },
    title: {
        flex: 1,
        fontSize: 30,
        color: '#ffffff',
        fontWeight: "bold",
    },
});

export default Ej;