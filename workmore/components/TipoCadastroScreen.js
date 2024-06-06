import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Cadastro from './Cadastro'

export default function TipoCadastroScreen({navigation}) {
  const handleNavigation = (tipoCadastro) => {
    navigation.navigate('Cadastro', { tipoCadastro });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha o tipo de cadastro:</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => handleNavigation('Cadastro')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Aluno</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleNavigation('Recrutador')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Recrutador</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#333',
    backgroundColor: '#E0FFFF',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});
