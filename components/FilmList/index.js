import React from "react";
import { View, FlatList, Text } from "react-native";
import FilmListing from "./FilmListing/index.js";

function FilmList({ navigate }) {
  const mockFilmData = [
    { title: "Star Wars", id: "1", totalSeconds: 3600 },
    { title: "Get Him to the Greek", id: "2", totalSeconds: 3600 },
    { title: "The Big Sleep", id: "3", totalSeconds: 3600 },
    { title: "The Big Lebowski", id: "4", totalSeconds: 60 },
    { title: "Inception", id: "5", totalSeconds: 30 }
  ];
  return (
    <View>
      <FlatList
        data={mockFilmData}
        renderItem={({ item }) => (
          <FilmListing navigate={navigate} data={item} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default FilmList;
