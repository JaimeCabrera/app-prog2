import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "http://192.168.0.104:3000";
// function to get all categories

export const getAllCategories = async (): Promise<any> => {
  const token = await AsyncStorage.getItem("token");
  if (token != null) {
    const { accessToken } = JSON.parse(token);
    const res = await fetch(`${API_URL}/api/categories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": `${accessToken}`,
      },
    });
    const data = await res.json();
    return data;
  }
};
