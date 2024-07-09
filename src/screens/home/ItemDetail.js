import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const ItemDetail = () => {
  const route = useRoute();
  const _id = route.params?._id;
  return (
    <View>
      <Text>ItemDetail --- {_id}</Text>
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({});
