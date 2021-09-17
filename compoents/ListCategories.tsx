import React, { useCallback, useEffect, useState } from "react";
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { getAllCategories } from "../services/category.services";
import LoadingIndicator from "./LoadingIndicator";
import CategoryItem from "./CategoryItem";

interface Icategory {
  id: number;
  name: String;
}

export const ListCategories = ({ navigation }: any) => {
  const [categories, setCategories] = useState<Icategory[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    const data = await getAllCategories();
    setCategories(data);
    console.log("loaded");
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    setLoading(true);
    await loadCategories();
    setRefreshing(false);
    setLoading(false);
  }, [categories]);

  const renderItem = ({ item }: any) => (
    <CategoryItem category={item} navigation={navigation} />
  );

  return loading ? (
    <LoadingIndicator />
  ) : (
    <SafeAreaView style={{ flex: 1, width: "100%" }}>
      <FlatList
        style={{ maxWidth: "100%" }}
        data={categories}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={["#78e08f"]}
            progressBackgroundColor="#0a3d62"
          />
        }
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
