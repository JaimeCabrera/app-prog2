import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { AddCategory, AuthScreen, HomeScreen, TasksScreen } from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator>
        <Stack.Screen name="Login" component={AuthScreen} />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={(navigation) => ({
            title: "Lista de Categorías",
            headerStyle: {
              backgroundColor: "#E5E8E8",
            },
            headerTintColor: "#2C3E50",
            headerTitleStyle:{fontSize:16}
          })}
        />
        <Stack.Screen name="Categoria Nueva" component={AddCategory} />
        <Stack.Screen name="Tareas" component={TasksScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  btnLogout: {
    color: "#3498DB",
  },
});
