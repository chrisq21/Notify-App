import React from "react"
import PropTypes from "prop-types"
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

FilmListing.propTypes = {
  navigate: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      totalFilmTime: PropTypes.number.isRequired,
      notifications: PropTypes.arrayOf(
        PropTypes.shape({
          notification: PropTypes.number.isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired
  ).isRequired,
}

export default FilmListing
