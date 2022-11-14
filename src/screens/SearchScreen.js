import { View, Text, StyleSheet } from "react-native"
import SearchBar from "../components/SearchBar"
import { useContext } from "react"
import { SearchContext } from "../context/SearchContext"

const SearchScreen = () => {
  const { term } = useContext(SearchContext)

  return (
    <View style={styles.backgroundStyle}>
      <SearchBar />
      <Text>Search screen</Text>
      <Text>{term}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "white",
  },
})

export default SearchScreen
