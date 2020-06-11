import React , { Component } from 'react';
import firebase from 'firebase'
import { StyleSheet, View ,TextInput, TouchableOpacity,Text  } from 'react-native';



class EmailAndPassword extends Component {
  state = { 
    Email:'',
    Password:'',
    error:'',
    loading:false
    
   }

   onButtonPress = () =>{
     console.log('ok')
     console.log(this.state.Email);
     
    firebase.auth().signInWithEmailAndPassword(this.state.Email,this.state.Password)  
    .then(this.onLoginSuccess)
    .catch(err =>{
      this.setState({error:err.message})
    })
    }
    onLoginSuccess = () =>{
      this.setState({
        error:'',
        loading:false

      })
    }
  render() { 
    return ( 
      <View>
        <TextInput placeholder= '  Email  /  Username            ' style={styles.input} value={ this.state.Email} onChangeText={Email=> this.setState({Email:Email})} />
        <TextInput placeholder= 'Password'  secureTextEntry={true}  style={styles.input} value={ this.state.Password} onChangeText={Password=> this.setState({Password:Password})} />
        <TouchableOpacity style={styles.buttonContener} onPress={this.onButtonPress} >
          <Text style={styles.buttonText}>LogIn</Text>
        </TouchableOpacity>
          <Text style={styles.errorText}>
            {this.state.error}
          </Text>
      </View>
     );
  }
}
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:21
  },
  input:{
   
    height :40,
    paddingLeft:10,
    marginBottom:15,
    borderRadius:5,
    fontSize:17,
    borderWidth:1,
    color:'white'


  },
  errorText:{
    fontSize:21,
    color:'red',
    alignSelf:'center',
  
  },
  buttonText:{
    textAlign:'center',
    fontWeight:'bold',
    fontSize:21,
    color:'#fff'
  },
  buttonContener:{
    backgroundColor:'#3B3B98',
    padding:15,
    borderRadius:8
  }
});

export default EmailAndPassword