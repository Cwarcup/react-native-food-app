import { View, Text, StyleSheet, FlatList } from "react-native"
import SearchBar from "../components/SearchBar"
import { useContext, useState, useEffect } from "react"
import { SearchContext } from "../context/SearchContext"
import useBusinesses from "../hooks/useBusinesses"

const SearchScreen = () => {
  const { searchTerm } = useContext(SearchContext)

  // custom hook to make the api request
  const [searchApi, results, errorMessage] = useBusinesses(searchTerm)

  useEffect(() => {
    searchApi(searchTerm)
  }, [searchTerm])

  const RenderItem = ({ item }) => {
    return (
      <View>
        <Text>{item.name}</Text>
      </View>
    )
  }

  return (
    <View style={styles.backgroundStyle}>
      <SearchBar />

      <Text>We have found {results.length} results</Text>
      {errorMessage ? (
        <Text>{errorMessage}</Text>
      ) : (
        <FlatList
          data={results}
          keyExtractor={(result) => result.id}
          renderItem={RenderItem}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "white",
  },
})

export default SearchScreen
