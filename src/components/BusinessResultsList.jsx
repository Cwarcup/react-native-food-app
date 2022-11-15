import { View, Text, StyleSheet } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import ResultsDetail from "./ResultsDetail"

const BusinessResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultsDetail result={item} />
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtext: {
    fontSize: 16,
    color: "grey",
  },
})

export default BusinessResultsList
