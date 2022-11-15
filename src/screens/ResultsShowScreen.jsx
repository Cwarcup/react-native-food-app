import { StyleSheet, Text, View, FlatList, Image } from "react-native"
import { useState, useEffect } from "react"
import yelp from "../api/yelp"

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null)

  const id = navigation.getParam("id")
  console.log({ id })

  // get the business details from the API
  const getBusinessDetails = async (id) => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
  }

  useEffect(() => {
    getBusinessDetails(id)
  }, [])

  if (!result) {
    return null
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        horizontal={true}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />
        }}
      />
      <Text style={styles.subtext}>{result.location?.display_address[0]} </Text>
      <Text style={styles.subtext}>{result.phone}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
  subtext: {
    fontSize: 14,
    color: "grey",
  },
})

export default ResultsShowScreen
