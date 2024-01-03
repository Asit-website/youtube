import React from 'react'
import { Text, View,StyleSheet, FlatList } from 'react-native'

 const FlatListDemo = () => {
   const names = [
    {   
        index:"1",
        name:"asit"
    },
    {
        index:"2",
        name:"shivam"
    },
    {
        index:"3",
        name:"rohit"
    },
   ]
    return (
      <FlatList 
       keyExtractor={(key)=>{
        return key.index
       }}
       horizontal
      data={names} renderItem={({item})=>{
        console.log(item.name)
          return <Text>{item.name}</Text>
      }}/>
    )
  }


const style = StyleSheet.create({
  styleOne:{
    width:200,
    height:200,
    backgroundColor:"red",
  }
})

export default FlatListDemo
