import React from "react"
import { TouchableHighlight, Text } from "react-native"

function FilmListing({ data, navigate }) {
  const navigateToFilmTimer = () => {
    navigate("FilmTimer", data)
  }

  return (
    <TouchableHighlight
      activeOpacity={0.1}
      underlayColor={"gray"}
      onPress={navigateToFilmTimer}
      style={{
        height: 50,
        borderBottomWidth: 1,
        borderColor: "black",
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Text>{data.title}</Text>
    </TouchableHighlight>
  )
}

export default FilmListing
