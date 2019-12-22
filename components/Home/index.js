import React from "react";
import { SafeAreaView, Text, Button } from "react-native";
import FilmList from "../FilmList/index.js";

function Home({ navigation }) {
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <FilmList navigate={navigation.navigate} />
      <Button title="test" onPress={() => navigation.navigate("FilmTimer")}>
        Test
      </Button>
    </SafeAreaView>
  );
}

export default Home;
