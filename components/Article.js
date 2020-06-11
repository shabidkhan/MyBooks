import React , { Component } from 'react';
import { StyleSheet, View ,Text, TouchableOpacity, ScrollView , Image ,SafeAreaView} from 'react-native';
import firebase from 'firebase'
import BooksData from '../api/Data/books.json'



class Article extends Component {
  state = { 
    
   }
  render() { 
    return ( 
      <SafeAreaView style={styles.container}>
        
        <ScrollView style={styles.ScrollViewcontainer} >
          <Image  source={{uri:'https://navgurukul.org/assets/img/logo.png'}} style={{ height:70,width:300,alignSelf:'center'}} />

          {BooksData.map(e=>(<View style={{flex:1,margin:10}} key={e.position}>  
          <Image 
          source={{ uri: e.img }}
          style={{ width: 200, height: 270 ,alignSelf:'center',margin:5}}/>
          <Text style={{color:'white',textAlign:'center'}}>{e.position}{e.name}</Text>
          <Text style={{color:'white',textAlign:'center'}}>Size : {e.size}</Text>
          
          </View>))}

          <TouchableOpacity style={{padding:20}} onPress={() => firebase.auth().signOut()} >
            <Text style={{color:'red',textAlign:'center',fontSize:21}} >LOG OUT</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
     );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  ScrollViewcontainer:{
    paddingVertical: 20
  }
});

export default Article