import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
const LoadingIndicator = () => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#148F77" />
      <Text style={styles.textLoading}>Cargando...</Text>
    </View>
  );
};
export default LoadingIndicator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  horizontal: {
    flexDirection: "row",
  },
  textLoading: {
    color: "#909497",
  },
});
