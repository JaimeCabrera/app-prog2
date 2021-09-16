import React from "react";
import {  StyleSheet,Button } from "react-native";
import { AuthScreen, HomeScreen } from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";



export default function App() {
  
 
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar style="dark"/>
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

