import React, { useState, useEffect, useRef } from "react";
import {
  Image,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  View,
} from "react-native";

const ImageScreen = () => {
  const [imageData, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  let isRendered = useRef(false);
  useEffect(() => {
    isRendered = true;
    fetch("https://fetch-model-images.herokuapp.com/images")
      .then((res) => res.json())
      .then((data) => {
        if (isRendered) {
          setData(data);
          setLoading(false);
        }
        return null;
      })
      .catch((err) => console.log(err));
    return () => {
      isRendered = false;
    };
  }, [imageData]);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {isLoading ? (
        <ActivityIndicator size="large" color={"#000000"} />
      ) : (
        <FlatList
          keyExtractor={(image) => image._id}
          data={imageData}
          renderItem={({ item }) => (
            <Image source={{ uri: item.url }} style={styles.image} />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 500,
    marginVertical: 4,
  },
});

export default ImageScreen;
