import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import telaDetalhes from '../components/telaDetalhes';

const DADOS = require("../dados/dados_covid.json");

export default function ListaPessoas({ navigation}){

const [suspeito, setSuspeito] = useState(0);
const [positivo, setPositivo] = useState(0);
const [negativo, setNegativo] = useState(0);


const CalculaPessoas = () => {
  let var_suspeito = 0;
  let var_negativo = 0;
  let var_positivo = 0;

  DADOS.forEach(x => {
    switch(x.statuscovid){
      case 'positivo': var_positivo++
      break; 
      case 'negativo': var_negativo++
      break;
      case 'suspeito': var_suspeito++
      break; 
    }
    
  });
  setSuspeito(var_suspeito);
  setNegativo(var_negativo);
  setPositivo(var_positivo);
}

useEffect(() => {
  CalculaPessoas();
}, []);

    return(
      <View style={{flex: 1}}>
      <View style={{flex: 0.9}}>
      <FlatList
          data={DADOS}
          renderItem={({ item }) => (
              <View style={styles.container1}>
                  <TouchableOpacity style={{ backgroundColor: 'white', padding: 9, flex: 1 }}
                      onPress={() => navigation.navigate("telaDetalhes", { item })}
                      > 
                      <Text style={{fontSize: 18, fontWeight:"bold"}}>{item.nome}</Text>
                      <Text>Sexo: {item.sexo}</Text>
                      <Text>Data de nascimento: {item.data_nasc}</Text>

                  </TouchableOpacity>
                  
                  {item.statuscovid == "positivo" && (
                    <View style={{width:10, height:10, borderRadius: 50, backgroundColor: 'red', marginBottom: 40, marginRight: 40}}></View>
                  )}
                  {item.statuscovid == "negativo" && (
                    <View style={{width:10, height:10, borderRadius: 50, backgroundColor: 'green', marginBottom: 40, marginRight: 40}}></View>
                  )}
                  {item.statuscovid == "suspeito" && (
                    <View style={{width:10, height:10, borderRadius: 50, backgroundColor: 'purple', marginBottom: 40, marginRight: 40}}></View>
                  )}

                </View>

          )}
          keyExtracto={item => item.id.toString()}
      />
      
    </View>
    <View style={{flexDirection:'row', alignItems: 'center', alignContent: 'center', flex: 0.1, justifyContent: 'space-around'}}>
      <Text style={{color: 'red',fontSize: 14, fontWeight: 'bold'}}>Positivo: {positivo}</Text>
      <Text style={{color: 'green',fontSize: 14, fontWeight: 'bold'}}>Negativo: {negativo}</Text>
      <Text style={{color: 'purple',fontSize: 14, fontWeight: 'bold'}}>Suspeito: {suspeito}</Text>
    </View>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24
    
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
},
text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
}
});

