import React from "react";
import { View, Text } from "react-native";

function FilmListing({ data }) {
  return (
    <View>
      <Text>{data.title}</Text>
    </View>
  );
}

export default FilmListing;
