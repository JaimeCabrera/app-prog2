import React from "react";
import {  StyleSheet,Button } from "react-native";
import { AuthScreen, HomeScreen } from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";



export default function App() {
  
  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('token')
    } catch(e) {
      // remove error
    }
  
    console.log('Done.')
  }
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={AuthScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
          title: 'Organizador de tareas',
          headerStyle: {
            backgroundColor: '#E5E8E8',
          },
          headerTintColor: '#2C3E50',
          
          
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  btnLogout:{
    color:"#3498DB"
  }
})

