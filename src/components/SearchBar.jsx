import { View, Text, StyleSheet, TextInput } from "react-native"
import Search from "react-native-vector-icons/MaterialIcons"
import { useContext } from "react"
import { SearchContext } from "../context/SearchContext"

const SearchBar = () => {
  const { term, setTerm } = useContext(SearchContext)

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
      ></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
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