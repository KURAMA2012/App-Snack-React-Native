import { NavigationContainer } from '@react-navigation/native';
import { Card } from 'react-native-paper';
import Home from './components/Home'
import Cadastro from './components/Cadastro'
import Vagas from './components/Vagas';
import Profile from './components/Profile';
import TechSelectionScreen from './components/TechSelectionScreen'
import TipoCadastroScreen from './components/TipoCadastroScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen component={Home} name="Home"  />

        <Stack.Screen component={Cadastro} name="Cadastro" />

        <Stack.Screen component={Vagas} name="Vagas" />

        <Stack.Screen component={TechSelectionScreen} name="TechSelectionScreen" />

        <Stack.Screen component={TipoCadastroScreen} name="TipoCadastroScreen" />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
