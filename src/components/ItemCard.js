import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { BASE_URL } from "../apis";
import { useNavigation } from "@react-navigation/native";

const ItemCard = ({ link, name, price, _id }) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("itemDetail", { _id });
  };
  return (
    <View
      style={{
        width: "45%",
        height: 175,
        padding: 5,
      }}
    >
      <TouchableOpacity
        onPress={handlePress}
        style={{
          flex: 1,
          borderRadius: 22,
          borderWidth: 1,
          backgroundColor: "green",
          borderColor: "green",
          overflow: "hidden",
        }}
      >
        <View style={{ flex: 7 }}>
          <Image
            source={{ uri: BASE_URL + "/" + link }}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <View
          style={{
            flex: 3,
            paddingHorizontal: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text>{name}</Text>
          <Text>{price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ItemCard;

const styles = StyleSheet.create({});
