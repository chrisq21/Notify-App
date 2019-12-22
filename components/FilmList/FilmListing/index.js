import React from "react";
import { TouchableHighlight, Text } from "react-native";

function FilmListing({ data, navigate }) {
  const navigateToFilmTimer = () => {
    navigate("FilmTimer", data);
  };

  return (
    <TouchableHighlight onPress={navigateToFilmTimer}>
      <Text>{data.title}</Text>
    </TouchableHighlight>
  );
}

export default FilmListing;
