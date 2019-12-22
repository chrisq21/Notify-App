import React from "react";
import { SafeAreaView, Text } from "react-native";
import FilmList from "../FilmList/index.js";

function Home() {
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <FilmList />
    </SafeAreaView>
  );
}

export default Home;
