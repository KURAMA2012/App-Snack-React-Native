import { Text, View, StyleSheet, Image,TouchableOpacity, TextInput, Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Pagina01 from './Cadastro'
import Pagina02 from './Vagas'
import tipoCadastro from './TipoCadastroScreen'





export default function Home({navigation}) {
  return (
    
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Busque por vagas de empregos.
      </Text>
          <Image style={styles.logo} source={require('../assets/logoapp.png')} />

          

          <TextInput style={styles.txti}
        autoCapitalize       = "none"
        placeholder          = "Login"
        placeholderTextColor = "#8b9cb5"
        
      />

      <TextInput
        autoCapitalize       = "none"
        placeholder          = "Senha"
        placeholderTextColor = "#8b9cb5"
        style                = {styles.txti}
      />
        <Button
        title   = <Text>LOGAR</Text>
        onPress = {() => navigation.navigate("Vagas")
        }
        
      />
      <Text style ={styles.paragraph2}>Faça o seu cadastro e consulte as vagas disponíveis.
          </Text>

            <Button
        title   = <Text>Cadastrar-se</Text>
        onPress = {() => navigation.navigate("TipoCadastroScreen")
        }
        
      />
  

    </View>

   
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#E0FFFF',
    flex: '1',
  },
  paragraph2: {
    margin: 15,
    marginTop: 50,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
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
