import React from "react";
import { View, FlatList, Text } from "react-native";
import FilmListing from "./FilmListing/index.js";

function FilmList({ navigate }) {
  const mockFilmData = [
    {
      title: "Star Wars",
      id: "1",
      totalFilmTime: 600,
      notifications: [{ notificationTime: 15 }]
    },
    {
      title: "Get Him to the Greek",
      id: "2",
      totalFilmTime: 600,
      notifications: [{ notificationTime: 15 }]
    },
    {
      title: "The Big Sleep",
      id: "3",
      totalFilmTime: 600,
      notifications: [{ notificationTime: 15 }]
    },
    {
      title: "The Big Lebowski",
      id: "4",
      totalFilmTime: 60,
      notifications: [{ notificationTime: 15 }]
    },
    {
      title: "Inception",
      id: "5",
      totalFilmTime: 30,
      notifications: [{ notificationTime: 3 }, { notificationTime: 6 }]
    }
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
