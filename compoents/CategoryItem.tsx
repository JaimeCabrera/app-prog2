import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";

const CategoryItem = ({ category, navigation }: any) => {
  const getTasks = async (categoryId: Number) => {
    navigation.navigate("Tareas", {
      categoryId,
    });
  };

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() => {
          getTasks(category.id);
        }}
      >
        <View style={styles.viewCategory}>
          <Text style={styles.categoryTitle}>{category.name}</Text>
          <Icon style={styles.icon} name="chevron-right" color="#909497" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  viewCategory: {
    flexDirection: "row",
    flex: 1,
    margin: 5,
    padding: 15,
    backgroundColor: "#E5E5E5",
    marginVertical: 0,
    marginHorizontal: 1,
    borderBottomColor: "#B3B6B7",
    borderLeftColor: "#eee",
    borderRightColor: "#eee",
    borderTopColor: "#eee",
    borderWidth: 1,
    justifyContent: "space-between",
  },
  categoryTitle: {
    color: "#34495E",
    fontWeight: "bold",
  },
  icon: {
    color: "#909497",
  },
});
