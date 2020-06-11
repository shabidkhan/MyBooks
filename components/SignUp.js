import React, { Component } from 'react';
import { StyleSheet, View ,TextInput, TouchableOpacity,Text, Button  } from 'react-native';
import firebase from 'firebase'

class SignUp extends Component {
    state = { 
        Email:'',
        Password:'',
        Confirm:'',
        error:'',
        message:'',
        }
    
        
    check = () =>{
        firebase.auth().createUserWithEmailAndPassword(this.state.Email,this.state.Password)
        .then(this.oSignUpSuccess)
        .catch(err =>{
        this.setState({error:err.message})
        })
    }
    oSignUpSuccess = () =>{
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
                <TextInput placeholder= 'Confirm Password'  secureTextEntry={true}  style={styles.input} value={ this.state.Confirm} onChangeText={Confirm=> this.setState({Confirm:Confirm})} />
                <Button title='Submit' onPress={this.check} disabled={(this.state.Password!=this.state.Confirm) || (this.state.Password.length<6) || (this.state.Email.length<6)} 
              
                />
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
      
      }
  });
  

export default SignUp;