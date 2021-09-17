import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import FloatButton from "../compoents/FloatButton";
import { ListCategories } from "../compoents/ListCategories";

export const HomeScreen = ({ navigation }: any) => {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.logout}> Cerrar Sesión</Text>
        </TouchableOpacity>
      ),
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

  const handleNewCategory = () => {
    navigation.navigate("Categoria Nueva");
  };
  // <Text style={styles.categoryTitle}>Lista de categorías</Text>
  return (
    <>
      <StatusBar backgroundColor="#2874A6" barStyle={"light-content"} />
      <View style={styles.container}>
        <ListCategories navigation={navigation} />
        <FloatButton addCategory={handleNewCategory} />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },

  categoryTitle: {
    margin: 10,
    fontSize: 16,
    color: "#808B96",
  },
  logout: {
    color: "#566573",
    marginRight: 20,
    fontSize: 12,
    fontWeight: "600",
  },
});
