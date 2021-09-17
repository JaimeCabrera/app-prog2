import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Button, Text, StyleSheet, View, TouchableOpacity } from "react-native";
import FloatButton from "../compoents/FloatButton";
import { ListCategories } from "../compoents/ListCategories";

interface Icategory {
  id: number;
  name: String;
}

export const HomeScreen = ({ navigation }: any) => {
  const API_URL = "http://192.168.0.104:3000";
  const [categories, setCategories] = useState<Icategory[]>([]);

  useEffect(() => {
    getCategories();
    navigation.setOptions({
      headerRight: () => (<TouchableOpacity onPress={handleLogout}><Text style={styles.logout}> Cerrar Sesión</Text></TouchableOpacity> ),
      
    });
  }, [navigation]);

  // function to logout
  const handleLogout = () => {
    removeValue();
  };
  // remove token from storage to clear session
  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem("token");
      navigation.replace("Login");
    } catch (e) {
      // remove error
    }

    console.log("Done.");
  };

  const getCategories = async () => {
    const token = await AsyncStorage.getItem("token");
    fetch(`${API_URL}/api/categories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": `${token}`,
      },
    }).then(async (res) => {
      const data = await res.json();
      setCategories(data);
      // console.log(data);
    });
  };

  const handleNewCategory = () => {
    navigation.navigate('Categoria Nueva')
  };
  return (
    <>
      <StatusBar style="dark"/>

      <View>
        <Text style={styles.categoryTitle}>Lista de categorías</Text>

        {categories ? (
          <ListCategories categories={categories} navigation={navigation} />
        ) : (
          ""
        )}
      </View>

      <FloatButton addCategory={handleNewCategory} />
    </>
  );
};
const styles = StyleSheet.create({
  categoryTitle: {
    flex: 1,
    justifyContent: "center",
    margin: 20,
    fontSize: 16,
    color: "#808B96",
  },
  logout:{
    color:'#566573',
    marginRight:20,
    fontSize:16,
  }
});
