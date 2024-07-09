import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ItemCard from "./ItemCard";
import { useQuery } from "@tanstack/react-query";
import { getAllItems } from "../apis/items";

const ItemList = () => {
  const { data } = useQuery({
    queryKey: ["items"],
    queryFn: () => getAllItems(),
  });

  return (
    <View style={{ flex: 90, paddingVertical: 5 }}>
      <ScrollView
        contentContainerStyle={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {data?.map((item) => {
          return (
            <ItemCard
              name={item.name}
              price={item.price}
              link={item.image}
              _id={item._id}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ItemList;

const styles = StyleSheet.create({});
