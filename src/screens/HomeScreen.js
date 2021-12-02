import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        title="Go to List"
        onPress={() => navigation.navigate("ScreenComponent")}
      />
      <Button
        title="Go to Screen"
        onPress={() => navigation.navigate("Components")}
      />
      <Button
        title="Go to Images"
        onPress={() => navigation.navigate("ImageScreen")}
      />
      <Button
        title="Go to Image Gallery"
        onPress={() => navigation.navigate("ImageGallery")}
      />
      <Button
        title="Go to Counter Demo"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Go to Colors Demo"
        onPress={() => navigation.navigate("Colors")}
      />
      <Button
        title="Go to Square Screen"
        onPress={() => navigation.navigate("Square")}
      />
      <Button
        title="Go to Color Reducer Screen"
        onPress={() => navigation.navigate("Reducer")}
      />
      <Button
        title="Go to Text Screen"
        onPress={() => navigation.navigate("Text")}
      />
      <Button
        title="Go to Layout Screen"
        onPress={() => navigation.navigate("Layout")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  buttons: {
    marginVertical: 10,
  },
});

export default HomeScreen;
