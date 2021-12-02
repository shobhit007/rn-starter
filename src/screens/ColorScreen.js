import React, { useState } from "react";
import { View, FlatList, StyleSheet, Button, Text } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  return (
    <View>
      <Button
        title="Add Color"
        onPress={() => {
          setColors([...colors, randomColor()]);
        }}
      />
      <FlatList
        keyExtractor={(color) => color}
        data={colors}
        renderItem={({ item }) => (
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: item,
              marginTop: 4,
            }}
          />
        )}
      />
    </View>
  );
};

const randomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
