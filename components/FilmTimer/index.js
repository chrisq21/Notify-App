import React from "react";
import { SafeAreaView, Text, Button } from "react-native";

function FilmTimer({ navigation }) {
  const title = JSON.stringify(navigation.getParam("title", ""));
  return (
    <SafeAreaView>
      <Text>{title}</Text>
    </SafeAreaView>
  );
}

export default FilmTimer;
