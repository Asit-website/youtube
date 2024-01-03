import React from "react";

import {StyleSheet, Text, View} from 'react-native';
import CustomComponent from "./src/screens/CustomComponent";
import FirstChallenge from "./src/screens/FirstChallenge";
import FlatListDemo from "./src/screens/FlatListDemo";
const App = () =>{
  const myName = "Asit Mandal";
  const myElement = <Text>Hello world plz subscribe</Text>
  return(
    <View>
    <Text style={styles.textStyle}>Hello World! {myName}</Text>
    <CustomComponent/>
    <FirstChallenge/>
    {myElement}
     <FlatListDemo/>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle:{
    color:"red",
    marginTop:50
  }
})

export default App;