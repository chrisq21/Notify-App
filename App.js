import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./components/Home/index.js";
import FilmTimerScreen from "./components/FilmTimer/index.js";

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  FilmTimer: { screen: FilmTimerScreen }
});

const App = createAppContainer(MainNavigator);

export default App;
