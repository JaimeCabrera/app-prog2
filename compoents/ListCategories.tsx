import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";

export const ListCategories = ({ categories, navigation }: any) => {
  return (
    <View>
      <FlatList
        data={categories}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(category) => (
          <Category category={category} navigation={navigation} />
        )}
      />
    </View>
  );
};
const Category = ({ category, navigation }: any) => {
  const { id, name } = category.item;
  return (
    <TouchableOpacity>
      <View style={styles.viewCategory}>
        <Text style={styles.categoryTitle}>{name}</Text>
        <Icon style={styles.icon} name="chevron-right" color="#909497" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  viewCategory: {
    flexDirection: "row",
    margin: 5,
    padding: 15,
    backgroundColor: "#E5E5E5",
    marginVertical: 1,
    marginHorizontal: 0,
    borderColor: "#ECF0F1",
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
