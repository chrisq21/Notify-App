import React from "react"
import PropTypes from "prop-types"
import { SafeAreaView, Text } from "react-native"
import FilmList from "../FilmList/index.js"

function Home({ navigation }) {
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <FilmList navigate={navigation.navigate} />
    </SafeAreaView>
  )
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

export default Home
