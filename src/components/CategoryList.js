import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CategoryItem from "./CategoryItem";
import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../apis/categories";

const CategoryList = () => {
  const { data } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getAllCategories(),
  });
  //
  return (
    <ScrollView
      horizontal
      pagingEnabled
      contentContainerStyle={{
        height: 70,
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        paddingHorizontal: 5,
      }}
    >
      {data?.map((category, index) => {
        return <CategoryItem name={category.name} index={index} />;
      })}
    </ScrollView>
  );
};

export default CategoryList;

const styles = StyleSheet.create({});
