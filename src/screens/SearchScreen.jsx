import { View, Text, StyleSheet, ScrollView } from "react-native"
import { useContext, useEffect } from "react"
import { SearchContext } from "../context/SearchContext"
import useBusinesses from "../hooks/useBusinesses"
import SearchBar from "../components/SearchBar"
import BusinessResultsList from "../components/BusinessResultsList"

const SearchScreen = () => {
  const { searchTerm } = useContext(SearchContext)

  // custom hook to make the api request
  const [searchApi, results, errorMessage] = useBusinesses(searchTerm)

  // run search when search term changes
  useEffect(() => {
    searchApi(searchTerm)
  }, [searchTerm])

  // filter results by price
  const filterResultsByPrice = (price) => {
    return results.filter((result) => result.price === price)
  }

  return (
    <View style={styles.backgroundStyle}>
      <SearchBar />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <BusinessResultsList
          title="Cheap Eats"
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
        <BusinessResultsList
          title="Ball Out"
          results={filterResultsByPrice("$$$$")}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "white",
    flex: 1,
  },
  resultText: {
    marginLeft: 10,
    marginBottom: 5,
  },
})

export default SearchScreen
