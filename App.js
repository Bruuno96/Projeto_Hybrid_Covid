import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import telaDetalhes from './components/telaDetalhes';
import ListaPessoas from './components/ListaPessoas'


const Stack = createNativeStackNavigator();
export default function App() {

    return (
          <NavigationContainer>
            <View style={styles.container}>
              <StatusBar barStyle="light-content" backgroundColor="black" />
                <Text style={styles.text} >  RELATÓRIO DO COVID-19 2021 </Text>
            </View>

            <Stack.Navigator initialRouteName="Principal">
              <Stack.Screen 
                    name ="Principal" 
                    component={ListaPessoas} 
                    options={{ headerShown: false }}/>

              <Stack.Screen 
                    name ="telaDetalhes" 
                    component={telaDetalhes} 
                    options={({ route }) => ({ title: `Relatório de ${route.params.item.nome}` })} />
            </Stack.Navigator>
          </NavigationContainer>
        );
    }

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24
    
},
text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
}
});