import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Button, FlatList, Text,StyleSheet, View } from "react-native";
import FloatButton from "../compoents/FloatButton";
import { ListCategories } from "../compoents/ListCategories";


 interface  Icategory {
   id:number,
  name: String,
};


export const HomeScreen = ({ navigation }: any) => {
  const API_URL = "http://192.168.0.104:3000";
  const [token, setToken] = useState("");
  const [categories, setCategories] = useState<Icategory[]>([]);

  useEffect(() => {
    getCategories();
    navigation.setOptions({
      headerRight: () => <Button onPress={handleLogout} title="Salir" />,
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
  // const onLoggedIn = (token: String) => {
  //   fetch(`${API_URL}/user`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "x-access-token": `${token}`,
  //     },
  //   }).then(async (res) => {
  //     try {
  //       const data = await res.json();
  //       console.log(data);
  //       if (res.status === 200) {
  //         setMessage(data.message);
  //       }
  //     } catch (error) {
  //       navigation.replace('AuthScreen');
  //     }
  //   });
  // };
  

const handleNewCategory=()=>{
alert('abre el formulario')
}
  return (
    <>
    <View>
      <Text style={styles.categoryTitle}>Lista de categorías</Text>
      
      { (categories) ? <ListCategories  categories={categories} navigation={navigation} />:''}
      
    </View>
    <FloatButton addCategory={handleNewCategory} />
    </>
  );
};
const styles = StyleSheet.create({
  categoryTitle:{
    flex:1,
    justifyContent:"center",
    margin:20,
    fontSize:16,
    color:"#808B96"
  }
})