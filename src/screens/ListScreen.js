import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: "20" },
    { name: "Friend #2", age: "30" },
    { name: "Friend #3", age: "21" },
    { name: "Friend #4", age: "24" },
    { name: "Friend #5", age: "26" },
    { name: "Friend #6", age: "23" },
    { name: "Friend #7", age: "27" },
    { name: "Friend #8", age: "28" },
    { name: "Friend #9", age: "31" },
    { name: "Friend #10", age: "19" },
    { name: "Friend #11", age: "22" },
    { name: "Friend #12", age: "25" },
  ];
  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => (
        <Text style={{ marginVertical: 20 }}>
          {item.name} - Age {item.age}
        </Text>
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default ListScreen;
