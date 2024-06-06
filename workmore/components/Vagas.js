import { StyleSheet,Text, View,} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Card } from 'react-native-paper';



export default function Vagas({navigation}) {
  return (
    <View style={styles.container}>
    <Card>
      <Text style={styles.paragraph2}> Vaga para analista de dados Jr
      Salário: R$ 3,500
      Tipo de trabalho: CLT 
      Modelo: Híbrido. </Text>
</Card>

<Card>
      <Text style={styles.paragraph2}> Desenvolvedor FullStack Pleno
      Salário: R$ 9,500
      Tipo de trabalho: CLT 
      Modelo: Remoto. </Text>
</Card>

<Card>
      <Text style={styles.paragraph2}> Cientista De Dados
      Salário: R$ 10,500
      Tipo de trabalho: PJ
      Modelo: Presencial. </Text>
</Card>
      
      
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
    margin: 20,
    padding: 20,
    marginTop: 50,
    fontSize: 14,
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
