import React from 'react';
import { StyleSheet, ScrollView, Text, useWindowDimensions, View } from "react-native";
import Image from 'react-native-scalable-image';

const Ej = ({ navigation }: { navigation: any }) => {
  const screen=useWindowDimensions();
  return (
  <ScrollView style={styles.container}>
      <Text style={[{fontSize: 15}, styles.title]}>Somos uma empresa jovem, focada em entregar as melhores soluções 
      em tecnologia! #thinkyounger</Text>
      <Text style={styles.text}> 
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
    marginTop: 15,
    fontSize: 15,
    color: '#ffffff',
    textAlign: "justify",
    marginLeft: 10,
    marginBottom: 15,
  },
});

export default Ej;