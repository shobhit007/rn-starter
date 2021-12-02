import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LayoutScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.box1} />
      {/* <View style={styles.box2} />
      <View style={styles.box3} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "black",
    borderWidth: 3,
  },
  box1: {
    backgroundColor: "red",
    flex: 1,
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: "green",
    top: 100,
  },
  box3: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
  },
});

export default LayoutScreen;
