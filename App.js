import React ,{ Component } from 'react';
import { StyleSheet, View ,ImageBackground} from 'react-native';
import LoginForm from './components/LoginForm';
import Article from './components/Article';
import BG from './components/Image/download5.jpg'
import firebase from 'firebase'


 
class App extends Component{
  state={
    loggedIn:false
  } 

  componentDidMount(){
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyBpr08cZz-U7E5Xa9aLZ-7DxnW6meay0zk",
      authDomain: "books-491a2.firebaseapp.com",
      databaseURL: "https://books-491a2.firebaseio.com",
      projectId: "books-491a2",
      storageBucket: "books-491a2.appspot.com",
      messagingSenderId: "485453979874",
      appId: "1:485453979874:web:726876a1fc07ad86fb7ebb",
      measurementId: "G-JVM0KQG6PJ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // firebase.analytics();
    firebase.auth().onAuthStateChanged(user =>{
      if (user){
        this.setState({loggedIn:true})
      }else{
        this.setState({loggedIn:false})
      } 
    })
     

  }

  renderContent = () =>{
    switch(this.state.loggedIn){
      case true:
        return <Article/>
               
      case false:
        return <LoginForm/>
    }
  }
  render(){
    return (
      <ImageBackground style={styles.container} source={BG} >
        <View style={styles.container}>
        { this.renderContent()}     
        </View>
      </ImageBackground>
      
    );
  }
}

  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // padding : 50,
    height:'100%',
    width:'100%',
  },
});



export default App