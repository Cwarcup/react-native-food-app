import { View, Text, StyleSheet, FlatList } from "react-native"
import SearchBar from "../components/SearchBar"
import { useContext, useState, useEffect } from "react"
import { SearchContext } from "../context/SearchContext"
import yelp from "../api/yelp"

const SearchScreen = () => {
  const { searchTerm } = useContext(SearchContext)

  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState("")

  const searchApi = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 5,
          term: searchTerm,
          location: "Vancouver",
        },
      })

      setResults(response.data.businesses)
    } catch (err) {
      console.log(err)
      setErrorMessage("Something went wrong")
    }
  }

  useEffect(() => {
    searchApi()
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
      <SearchBar term={searchTerm} />

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
