import React from "react";
import {View,Text,StyleSheet} from 'react-native';

const FirstChallenge = () =>{
    const yourName = "Asit"
    return(
       <View>
          <Text style={styles.textStyleOne}>Welcome to thapa</Text>
          <Text style={styles.textStyleTwo}>Welcome to asit</Text>
          <Text>Hi My Name is {yourName}</Text>
       </View>
    );
};

const styles = StyleSheet.create({
    textStyleOne:{
        color:"red"
    },
    textStyleTwo:{
        color:"blue"
    }
})

export default FirstChallenge;