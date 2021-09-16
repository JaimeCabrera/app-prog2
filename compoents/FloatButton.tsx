import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon  from 'react-native-vector-icons/FontAwesome5'

const FloatButton = ({addCategory}:any) => {
  return (
    <TouchableOpacity style={styles.floatActionButton} onPress={addCategory}>
      <Icon name="plus" size={21} color="#eee"/>
    </TouchableOpacity>
  )
}

export default FloatButton

const styles = StyleSheet.create({
  floatActionButton:{
    backgroundColor:"#3498DB",
    width:55,
    height:55,
    position:"absolute",
    bottom:25,
    right:10,
    borderRadius:100,
    justifyContent:"center",
    alignItems:"center",
    shadowRadius:10,
    shadowColor:"#909497"
  }
})
