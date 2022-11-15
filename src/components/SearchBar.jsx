import { View, StyleSheet, TextInput } from "react-native"
import Search from "react-native-vector-icons/MaterialIcons"
import { useContext } from "react"
import { SearchContext } from "../context/SearchContext"

const SearchBar = () => {
  const { term, setTerm, setSearchTerm } = useContext(SearchContext)

  return (
    <View style={styles.backgroundStyle}>
      <Search name="search" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        placeholderTextColor="grey"
        autoCapitalize="true"
        autoCorrect={false}
        value={term}
        onChangeText={(newTerm) => setTerm(newTerm)}
        onEndEditing={() => setSearchTerm(term)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 10,
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 25,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
})

export default SearchBar
