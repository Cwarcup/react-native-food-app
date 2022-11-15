import { View, Text, StyleSheet } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import ResultsDetail from "./ResultsDetail"

const BusinessResultsList = ({ title, results }) => {
  return (
    <View style={styles.container}>
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
  container: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 5,
  },
  subtext: {
    fontSize: 16,
    color: "grey",
  },
})

export default BusinessResultsList
