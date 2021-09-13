import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { AuthScreen } from "./screens";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <AuthScreen />
        <StatusBar style="auto" />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ABB2B9",
  },

});
