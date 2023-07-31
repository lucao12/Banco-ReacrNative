import React, { Component } from 'react';
import { StyleSheet, Text, View, Switch, TouchableOpacity, TextInput, Alert } from 'react-native';
import Slider from '@react-native-community/slider'
import {Picker} from '@react-native-picker/picker'

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome: null,
      idade: null,
      sexo: 0,
      sexos: [
        {id: 0, valor: 'Escolha um Gênero'},
        {id: 1, valor: 'Masculino'},
        {id: 2, valor: 'Feminino'},
        {id: 3, valor: 'Outro'}
      ],
      valor: 0,
      status: false
    }
    this.enviar = this.enviar.bind(this);
  }

  enviar(){
    if(this.state.nome === null || this.state.nome === '' || this.state.idade === null || this.state.idade === '' || 
    this.state.sexo === 'Escolha um Gênero' || this.state.sexo === 0)
    {
      Alert.alert('Cuidado','Preencha todos os campos obrigatoriamente!');
    }
    else
    {
      Alert.alert('Registros', 'Nome: ' + this.state.nome + '\nIdade: ' + this.state.idade + '\nGênero: ' + 
      this.state.sexos[this.state.sexo].valor + '\nValor do Limite: ' + this.state.valor.toFixed(2) + '\nEstudante: ' + 
      ((this.state.status) ? 'Sim' : 'Não'));
    }
  }

  render(){
    let SexoSelecionado = this.state.sexos.map((v,k) => {
      return(<Picker.Item key={k} value={k} label={v.valor}/>);
    });
    return (
      <View 
      style={styles.container}>

        <Text 
        style={styles.textoBanco}>
          Banco React Native
        </Text>

        <TextInput 
        style={[styles.Input, styles.margem]} 
        placeholder='Insira seu Nome: '
        placeholderTextColor='#000'
        underlineColorAndroid="transparent"
        onChangeText={(texto) => this.setState({nome: texto})}/>

        <TextInput 
        style={styles.Input} 
        placeholder='Insira sua Idade: '
        placeholderTextColor='#000'
        underlineColorAndroid="transparent"
        keyboardType="numeric"
        onChangeText={(texto) => this.setState({idade: texto})}/>

        <View
        style={styles.area}>

        <Text style={{color: '#000'}}>
          Sexo: 
        </Text>

        <Picker
        selectedValue={this.state.sexo}
        onValueChange={(sexoEscolhido, sexoIndex) => this.setState({sexo: sexoEscolhido})}
        style={styles.picker}>
          {SexoSelecionado}
        </Picker>

        </View>

        <View 
        style={styles.area}>

          <Text style={{color: '#000'}}> 
            Limite: 
          </Text>

          <Slider 
          style={styles.slider}
          minimumValue={0}
          maximumValue={5000}
          minimumTrackTintColor='#00ff00'
          maximumTrackTintColor='#FF0000'
          value={this.state.valor}
          onValueChange={(valor) => this.setState({valor: valor})}/>

        </View>

        <Text style={styles.textoLimite}>R$ {this.state.valor.toFixed(2)}</Text>

        <View
        style={styles.areaSwitch}>

          <Text style={{color: '#000'}}>Aluno: </Text>

          <Switch
          value={this.state.status}
          onValueChange={(valor) => this.setState({status: valor})}
          />

          <Text
          style={[this.state.status ? styles.textoSwitchS : styles.textoSwitchN, styles.textoItalico]}>
            {(this.state.status) ? 'SIM' : 'NÃO'}
          </Text>

        </View>

        <View
        style={styles.area}>
          <TouchableOpacity
          style={styles.btn}
          onPress={this.enviar}>
            <Text 
            style={styles.textoBtn}>
              Enviar
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8E6E5"
  },
  textoBanco:{
    textAlign: 'center',
    fontSize: 36,
    color: "#ffffff",
    borderWidth: 1,
    backgroundColor: "#000"

  },
  margem:{
    marginTop: 50
  },
  Input:{
    borderWidth: 1,
    margin: 10,
    padding: 10,
    fontSize: 20,
    borderColor: "#222",
    height: 45,
  },
  picker:{
    borderWidth: 1,
    borderColor: "#000",
    width: 250,
    color: '#000'
  },
  area:{
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    padding: 10,
    alignItems: 'center'
  },
  slider:{
    width: 320
  },
  textoLimite:{
    textAlign: 'center',
    fontSize: 20,
    fontStyle: 'italic',
    color: '#000'
  },
  areaSwitch:{
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  textoSwitchS:{
    color: 'green'
  },
  textoSwitchN:{
    color: 'red'
  },
  textoItalico:{
    fontStyle: 'italic',
    fontSize: 17,
    fontWeight: 'bold'
  },
  btn:{
    flex: 1,
    borderWidth: 1,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    margin: 100,
  },
  textoBtn:{
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
  },
});
