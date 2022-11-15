import { StyleSheet, Text, View, Image } from "react-native"

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.title}>{result.name}</Text>
      <Text style={styles.subtext}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  )
}

export default ResultsDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subtext: {
    fontSize: 14,
    color: "grey",
  },
})
