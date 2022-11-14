import { View, Text, StyleSheet, TextInput } from "react-native"
import Search from "react-native-vector-icons/MaterialIcons"

const SearchBar = () => {
  return (
    <View style={styles.backgroundStyle}>
      <Search name="search" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        placeholderTextColor="grey"
        autoCapitalize="true"
        autoCorrect={false}
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
