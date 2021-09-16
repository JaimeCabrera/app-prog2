import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "http://192.168.0.104:3000/api/auth";

export const AuthScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");
  // :TODO:verificar si no hay token
  useEffect(() => {
    getData();
  }, []);

  // navigation
  const storeData = async (value: any) => {
    try {
      console.log("token guardado");
      await AsyncStorage.setItem("token", value);
      navigation.replace("HomeScreen");
    } catch (e) {
      // navigation.push('HomeScreen');
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        // value previously stored
        navigation.replace("HomeScreen");
        // setToken(value)
      }
    } catch (e) {
      // error reading value
      navigation.replace("AuthScreen");
    }
  };

  // metodo para logearse
  const handleLogin = () => {
    const payload = {
      email,
      password,
    };
    fetch(`${API_URL}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then(async (res) => {
        try {
          const data = await res.json();
          if (res.status !== 200) {
            setIsError(true);
            setMessage(data.message);
          } else {
            // onLoggedIn(data.accessToken);
            setIsError(false);
            // save token
            storeData(data.accessToken);
            setMessage(data.message);
          }
        } catch (error) {
          console.log(error);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getMessage = () => {
    const status = isError ? "" : "";
    return status + message;
  };
  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Iniciar Sesión</Text>
      <View style={styles.form}>
        <View style={styles.inputs}>
          <TextInput
            style={styles.input}
            placeholder="Escribe tu correo"
            autoCapitalize="none"
            onChangeText={setEmail}
          ></TextInput>
          {/* {!isLogin && <TextInput style={styles.input} placeholder="Name" onChangeText={setName}></TextInput>} */}
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="Escribe tu password"
            onChangeText={setPassword}
          ></TextInput>
          <Text style={[styles.message, { color: isError ? "red" : "green" }]}>
            {message ? getMessage() : null}
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Ingresar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    width: "80%",
    marginTop: "40%",
    marginHorizontal: "10%",
    borderRadius: 20,
    maxHeight: 480,
    paddingBottom: "85%",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: "25%",
    marginTop: "5%",
    marginBottom: "30%",
    color: "black",
  },
  form: {
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: "5%",
  },
  inputs: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "10%",
  },
  input: {
    width: "80%",
    borderBottomWidth: 1,
    borderBottomColor: "#85929E",
    paddingTop: 10,
    fontSize: 16,
    minHeight: 40,
  },
  button: {
    width: "90%",
    backgroundColor: "#3498DB",
    height: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "400",
  },
  buttonAlt: {
    width: "80%",
    borderWidth: 1,
    height: 40,
    borderRadius: 50,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 6,
  },
  buttonAltText: {
    color: "black",
    fontSize: 16,
    fontWeight: "400",
  },
  message: {
    fontSize: 16,
    marginVertical: "5%",
  },
});
