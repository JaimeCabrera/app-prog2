import AsyncStorage from "@react-native-async-storage/async-storage";

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export const AddCategory = ({ navigation }: any) => {
  const API_URL = "http://192.168.0.104:3000/api/categories";

  const [category, setCategory] = useState({
    name: "",
  });
  const handleChange = (name: any, value: String) => {
    setCategory({ ...category, [name]: value });
  };

  const addNewCategory = async () => {
    // const token = await AsyncStorage.getItem("token");
    const token = await AsyncStorage.getItem("token");
    if (token != null) {
      const { accessToken } = JSON.parse(token);

      const res = await fetch(`${API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `${accessToken}`,
        },
        body: JSON.stringify(category),
      });
      const data = await res.json();
      if (data) {
        navigation.navigate("HomeScreen");
      }
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Escribe el nombre de la categoria"
        placeholderTextColor="#979A9A"
        style={styles.input}
        onChangeText={(text) => handleChange("name", text)}
      />
      <TouchableOpacity style={styles.btn} onPress={addNewCategory}>
        <Text style={styles.btnText}>Guardar Categoria</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },

  input: {
    marginTop: 20,
    width: "90%",
    marginBottom: 7,
    borderWidth: 1,
    backgroundColor: "#D0D3D4",
    fontSize: 15,
    padding: 10,
    borderColor: "#AEB6BF",
    borderRadius: 5,
    color: "#283747",
  },
  btn: {
    marginVertical: 15,
    width: "90%",
    padding: 10,
    borderRadius: 5,
    marginBottom: 3,
    backgroundColor: "#148F77",
    shadowRadius: 8,
    shadowColor: "#979A9A",
  },
  btnText: {
    color: "#D0D3D4",
    fontWeight: "500",
    textAlign: "center",
  },
});
