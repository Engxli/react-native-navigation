import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CategoryItem = ({ name, index }) => {
  return (
    <View
      style={{
        minWidth: 70,
        backgroundColor: index % 2 == 0 ? "green" : "red",
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 22,
        justifyContent: "center",
        alignItems: "center",

        height: "70%",
      }}
    >
      <Text>{name}</Text>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({});
