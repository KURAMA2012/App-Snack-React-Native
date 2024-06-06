import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from './Home'
import Pagina02 from './Vagas'
import TechSelectionScreen from './TechSelectionScreen'




export default function Cadastro({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Faça o seu cadastro.</Text>

      <TextInput style={styles.txti}
        autoCapitalize       = "none"
        placeholder          = "Nome Completo"
        placeholderTextColor = "#8b9cb5"
        
      />

      <TextInput
        autoCapitalize       = "none"
        placeholder          = "CPF"
        placeholderTextColor = "#8b9cb5"
        style                = {styles.txti}
      />

      <TextInput
        autoCapitalize       = "none"
        placeholder          = "E-mail"
        placeholderTextColor = "#8b9cb5"
        style                = {styles.txti}

        
      />
       <TextInput
        autoCapitalize       = "none"
        placeholder          = "Telefone"
        placeholderTextColor = "#8b9cb5"
        style                = {styles.txti}

        
      />

       <TextInput
        autoCapitalize       = "none"
        placeholder          = "Matrícula"
        placeholderTextColor = "#8b9cb5"
        style                = {styles.txti}

        
      />
       <Button
        title   = <Text>CONCLUIR E VER VAGAS</Text>
        onPress = {() => navigation.navigate("TechSelectionScreen")
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E0FFFF',
  },
  
  txti: {
    backgroundColor:   "white",
    borderColor:       "#8b9cb5",
    borderRadius:      10,
    borderWidth:       2,
    fontSize:          18,
    fontWeight:        "bold",
    height:            40,
    margin:            10,
    marginTop:         5,
    padding:           12,
    textAlign:         "left",
    width:             "80%",
  },
   paragraph: {
    margin:            20,
    fontSize:          24,
    fontWeight:        "bold",
    textAlign:         "center",
  },
});
