import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import CategoryList from "../../components/CategoryList";
import ItemList from "../../components/ItemList";

const HomeScreen = () => {
  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.navigate("itemDetail", { itemId: 5 });
  };
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <CategoryList />
      <ItemList />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
