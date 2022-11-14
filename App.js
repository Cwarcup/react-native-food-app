import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import SearchScreen from "./src/screens/SearchScreen"
import { SearchProvider } from "./src/context/SearchContext"

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Foodie Search",
    },
  }
)

const AppContainer = createAppContainer(navigator)

export default function App() {
  return (
    <SearchProvider>
      <AppContainer />
    </SearchProvider>
  )
}
