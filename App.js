import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from './components/Home/index.js'

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen }
})

const App = createAppContainer(MainNavigator)

export default App
