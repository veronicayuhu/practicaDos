import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Botones from './components/Botones';
import Resultado from './components/Resultado';

const App = () => {
  return (
    <View styles={{ flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Calculadora</Text>
      </View>
      <Resultado/>
      <Botones/>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#5499C7',
    height: 60
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginVertical: 16
  }
});

export default App;
