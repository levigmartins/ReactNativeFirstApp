import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>No Bugs</Text>
      <Text>Empresa Júnior de Informática</Text>
      <Text>Universidade Federal de Viçosa</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 50,
    backgroundColor: '#0075C9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});