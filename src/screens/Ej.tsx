import React from 'react';
import { StyleSheet, ScrollView, Text, useWindowDimensions, TouchableOpacity, View } from "react-native";
import Image from 'react-native-scalable-image';
import Footer from '../Footer'

const Ej = ({ navigation }: { navigation: any }) => {
  const screen=useWindowDimensions();
  return (
    <ScrollView style={{flex:1}}>
      <ScrollView style={styles.container}>
        <Text style={[{fontSize: 15}, styles.title]}>
          Somos uma empresa jovem, focada em entregar as melhores soluções 
          em tecnologia! #thinkyounger
        </Text>
        
        <Text style={[{marginTop: 15, fontSize: 15, marginLeft: 10, marginBottom: 15}, styles.text]}> 
          A No Bugs é uma associação civil, sem  fins econômicos, 
          fundada em 1996 e constituída essencialmente por estudantes 
          de graduação  do curso de Ciência da Computação da UFV. 
        </Text>
        
        <Image style={{marginTop: 10, marginBottom: 10, borderWidth: 3, 
          borderColor: '#ffffff', alignSelf: "center"}}
          width={(screen.width)/1.2}
          source={require('../static/img/nb.jpg')}
        />
        
        <Text style={[{fontSize: 30, marginTop: 10} ,styles.title]}>Departamentos</Text>
        
        <TouchableOpacity 
          style={[{marginTop: 20}, styles.buttons]}
          onPress={() => {navigation.navigate("Home")}}
        >
          <Text style={{textAlign: "center", fontWeight: "bold", fontSize: 16}}>Presidência</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[{marginTop: 20}, styles.buttons]}
          onPress={() => {navigation.navigate("Home")}}
        >
          <Text style={{textAlign: "center", fontWeight: "bold", fontSize: 16}}>Vice-Presidência</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[{marginTop: 20}, styles.buttons]}
          onPress={() => {navigation.navigate("Home")}}
        >
          <Text style={{textAlign: "center", fontWeight: "bold", fontSize: 16}}>Comercial</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[{marginTop: 20}, styles.buttons]}
          onPress={() => {navigation.navigate("Home")}}
        >
          <Text style={{textAlign: "center", fontWeight: "bold", fontSize: 16}}>Projetos</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[{marginTop: 20}, styles.buttons]}
          onPress={() => {navigation.navigate("Home")}}
        >
          <Text style={{textAlign: "center", fontWeight: "bold", fontSize: 16}}>Comunicação</Text>
        </TouchableOpacity>

        <Text style={[{fontSize: 30, marginTop: 20} ,styles.title]}>Fale Conosco</Text>

        <TouchableOpacity 
          style={[{marginTop: 20, marginBottom: 10}, styles.buttons]}
          onPress={() => {navigation.navigate("Contato")}}
        >
          <Text style={{textAlign: "center", fontWeight: "bold", fontSize: 16}}>Onde nos Encontrar</Text>
        </TouchableOpacity>

      </ScrollView>
      <Footer/>
    </ScrollView>
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0075C9',
    padding: 20,
    flexDirection: "column",
  },
  title: {
    color: '#ffffff',
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    color: '#ffffff',
    textAlign: "justify",
  },
  buttons: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 5,
  }
});

export default Ej;