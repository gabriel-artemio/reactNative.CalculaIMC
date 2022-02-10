import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default function App(){

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function handleSubmit(){
    const alt = altura / 100;
    const imc = peso / (alt * alt);
    
    if(imc < 18.6){
      alert('Você esta abaixo do peso! ' + imc.toFixed(2));
    }else if(imc >= 18.6 && imc < 24.9){
      alert('Seu peso esta ideal! ' + imc.toFixed(2));
    }else if(imc >= 24.9 && imc < 34.9){
      alert('Levemente acima do peso !' + imc.toFixed(2));
    }
  }
  
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Calcule o seu IMC</Text>
      {/* Input peso */}
      <TextInput
      style={styles.input}
      value={peso}
      onChangeText={ (peso) => setPeso(peso) }
      placeholder="Peso em (kg)"
      keyboardType='numeric'
      />
      {/* Input altura */}
      <TextInput
      style={styles.input}
      value={altura}
      onChangeText={ (altura) => setAltura(altura) }
      placeholder="Altura em (cm)"
      keyboardType='numeric'
      />
      {/* Botão para realizar o cálculo */}
      <TouchableOpacity 
      style={styles.botao}
      onPress={handleSubmit}
      >
        <Text style={styles.btnText}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  title:{
    textAlign:'center',
    marginTop:50,
    fontSize:30,
  },
  input:{
    backgroundColor:'#c5c5c5',
    margin:15,
    padding:10,
    color:'#000',
    fontSize:23,
  },
  botao:{
    justifyContent:'center',
    alignItems:'center',
    margin: 10,
    backgroundColor:'#41AEF4',
    padding:10,
    borderRadius:50
  },
  btnText:{
    color:'#fff',
    fontSize:25,
  }
});