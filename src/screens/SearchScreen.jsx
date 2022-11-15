import { View, Text, StyleSheet } from "react-native"
import SearchBar from "../components/SearchBar"
import { useContext, useEffect } from "react"
import { SearchContext } from "../context/SearchContext"
import useBusinesses from "../hooks/useBusinesses"
import BusinessResultsList from "../components/BusinessResultsList"

const SearchScreen = () => {
  const { searchTerm } = useContext(SearchContext)

  // custom hook to make the api request
  const [searchApi, results, errorMessage] = useBusinesses(searchTerm)

  useEffect(() => {
    searchApi(searchTerm)
  }, [searchTerm])

  console.log({ results })

  const filterResultsByPrice = (price) => {
    return results.filter((result) => result.price === price)
  }

  return (
    <View style={styles.backgroundStyle}>
      <SearchBar />
      <Text>We have found {results.length} results</Text>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <BusinessResultsList
        title="Cost Effective"
        results={filterResultsByPrice("$")}
      />
      <BusinessResultsList
        title="Bit Pricier"
        results={filterResultsByPrice("$$")}
      />
      <BusinessResultsList
        title="Big Spender"
        results={filterResultsByPrice("$$$")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "white",
  },
})

export default SearchScreen
