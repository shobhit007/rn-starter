import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ScreenComponent = () => {
  const name = "shobhit saini";
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with react native!</Text>
      <Text style={styles.text2}>My name is {name}</Text>
      <Image
        style={styles.image}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  text2: {
    fontSize: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 20,
    marginLeft: 30,
    borderRadius: 50,
  },
});

export default ScreenComponent;
