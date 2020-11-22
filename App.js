import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,  
} from 'react-native';
import {Button, Icon} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './views/Main';
import Login from './views/Login';
import Settings from './views/Settings';



const App = () => {

  //Instanciando Stack para el Uso de la Navegacion tipo Stack (React Navigation)
  const Stack = createStackNavigator();

  //Redireccionar
  //const navigation = useNavigation();

  return (
    <>
      <StatusBar barStyle="default" translucent backgroundColor="transparent" />
      <NavigationContainer>        
        <Stack.Navigator initialRouteName="Main" screenOptions={{ headerTitleStyle: { fontFamily: 'Ubuntu-Regular', fontWeight: 'bold' } }}>
        <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: 'Iniciar Sesión',
              headerShown: false,
              headerTitleAlign: 'center',              
            }}
          />

          <Stack.Screen
            name="Main"
            component={Main}
            options={{
              title: 'Bienvenido(a)',
              headerShown: true,
              headerTitleAlign: 'center',              
            }}
          />

          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{
              title: 'Configuraciones',
              headerShown: true,
              headerTitleAlign: 'center',              
            }}
          />         

          {/* <Stack.Screen
            name="CrearCuenta"
            component={CrearCuenta}
            options={{
              title: 'Crear Cuenta',
              headerStyle: {
                backgroundColor: '#0D41A9',
              },
              headerTintColor: '#FFF',
              headerTitleAlign: 'center',
            }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>      
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
