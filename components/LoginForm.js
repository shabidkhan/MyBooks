import React , { Component } from 'react';
import { StyleSheet, View ,Text,TouchableOpacity } from 'react-native';
// import {Constants} from 'expo';
import Logo from './Logo'
import EmailAndPassword from './EmailAndPassword'
import SignUp from './SignUp';

class LoginForm extends Component {
  state = { 
    pressed:true
   }
  pressing=()=>{
    this.setState({pressed:!this.state.pressed})
  }

  renderContentinsideButton = () =>{
    switch(this.state.pressed){
      case true:
        return "SignUp"
      case false:
        return "LogIn"
    }
  }
  frame = () =>{
    switch(this.state.pressed){
      case true:
        return  <EmailAndPassword/>
      case false:
        return <SignUp/>
    }
    
  }

  render() { 
    return ( 
      <View style={styles.container}>

        <TouchableOpacity style={{marginTop:17,alignSelf:'flex-start',backgroundColor:'#000080',borderRadius:3}} onPress={this.pressing} >
          <Text style={{fontSize:21,color:'#fff'}}>{this.renderContentinsideButton()}</Text> 
        </TouchableOpacity>
        <View style={styles.logContainer}>
          <Logo/>
        </View>
        <View style={styles.emailAndPassword}>
        {this.frame()}

        </View>
      </View>
     );
  }
}
 



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logContainer:{
    flex:1,
    justifyContent:'center'

  },
  emailAndPassword:{
    flex:2,
    alignItems: 'center',
    // justifyContent: 'center',

  }
});

export default LoginForm