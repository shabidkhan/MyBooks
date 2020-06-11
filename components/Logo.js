import React , { useState } from 'react';
import { StyleSheet, View ,Text , Image} from 'react-native';


const Logo = () => {
  return (
    <View style={styles.container}>
        <Image  source={{uri:'https://navgurukul.org/assets/img/logo.png'}} style={{ height:70,width:300}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Logo