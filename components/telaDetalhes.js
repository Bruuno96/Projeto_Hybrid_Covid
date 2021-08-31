import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListaPessoas from './ListaPessoas';

export default function telaDetalhes({ route, navigation }){
  const { item } = route.params;

  return(
    <ScrollView style={styles.scrollCSS}>
    <View style={styles.container1}>
      <TouchableOpacity style={{ backgroundColor: 'white', padding: 9, flex: 1 }}
          onPress={() => navigation.navigate("telaDetalhes", { item })}
          >

          <Text style={{fontSize: 18, fontWeight:"bold", justifyContent: 'center', alignContent: 'center'}}>{item.nome}</Text>
          <Text>Data de atendimento: {item.data_atendimento}</Text>
          <Text>Sintomas: {item.sintomas}</Text>
          <Text>Doenças Pré-Existentes: {item.doenças_pré_existentes}</Text>
          <Text>Status COVID: {item.statuscovid}</Text>
          
      </TouchableOpacity>
      {item.statuscovid == "positivo" && (
          <View style={{width:10, height:10, borderRadius: 50, backgroundColor: 'red', marginBottom: 40, marginRight: 40}}></View>
        )}
        {item.statuscovid == "negativo" && (
          <View style={{width:10, height:10, borderRadius: 50, backgroundColor: 'green', marginBottom: 40, marginRight: 40}}></View>
        )}
        {item.statuscovid == "suspeito" && (
          <View style={{width:10, height:10, borderRadius: 50, backgroundColor: 'yellow', marginBottom: 40, marginRight: 40}}></View>
        )}

        
    </View>
      <View style={{justifyContent: 'center', alignItems:'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate("Principal")}>
                <Text style={{fontSize: 18, fontWeight:"bold", borderColor: 'black  '}}>Voltar para tela principal</Text>
            </TouchableOpacity>
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
scrollCSS: {
  justifyContent: 'center',
  alignContent: 'center',
  borderRadius:49,
},
/* CSS DO FLAT LIST */
container1: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
    marginTop: 5,
    shadowColor: "#000",
shadowOffset: {
  width: 0,
  height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
}
});