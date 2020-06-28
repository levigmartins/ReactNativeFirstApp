import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

const Home = ({ navigation }: { navigation: any }) => {
  return <View style={styles.container}>
    <TouchableOpacity onPress={() => { navigation.navigate("ej") }}>
      <Image style={styles.logo} 
        source={require('../static/img/proibidao_branco.png')}/>
    </TouchableOpacity>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#0075C9',
  },
  logo: {
    height: 180,
    width: 180,
  },
});

export default Home;