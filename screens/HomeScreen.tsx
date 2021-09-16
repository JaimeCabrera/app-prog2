import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react'
import { Button, Text, View } from 'react-native'

export const HomeScreen = ({navigation}:any) => {

const API_URL = "http://192.168.0.104:3000/api/auth";
const [message, setMessage] = useState("");
const [token, setToken] = useState("")
const [categories, setCategories] = useState([])

useEffect(() => {
 getData()
 navigation.setOptions({headerRight: () => (
  <Button onPress={handleLogout}  title="Salir" />
),})
}, [navigation])

const handleLogout = ()=>{
  removeValue()
  
}
const removeValue = async () => {
  try {
    await AsyncStorage.removeItem('token')
    navigation.replace('Login');
  } catch(e) {
    // remove error
  }

  console.log('Done.')
}
const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('token')
    if(value !== null) {
      // value previously stored
      setToken(value)
    }
  } catch(e) {
    navigation.replace('AuthScreen');
    // error reading value
  }
}

  const onLoggedIn = (token: String) => {
    fetch(`${API_URL}/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": `${token}`,
      },
    }).then(async (res) => {
      try {
        const data = await res.json();
        console.log(data);
        if (res.status === 200) {
          setMessage(data.message);
        }
      } catch (error) {
        navigation.replace('AuthScreen');
      }
    });
  };


  return (
    <View>
      <Text>Este es el home de la </Text>
    </View>
  )
}
