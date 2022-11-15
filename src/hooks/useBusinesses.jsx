import { useEffect, useState } from "react"
import yelp from "../api/yelp"

export default () => {
  // results: array of businesses returned from the API
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState("")

  // make a request to the yelp api
  // with the search term
  const searchApi = async (term) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: term,
          location: "Vancouver",
        },
      })

      setResults(response.data.businesses)
    } catch (err) {
      console.error(err)
      setErrorMessage("Something went wrong")
    }
  }

  useEffect(() => {
    // default search term
    searchApi("Pasta")
  }, [])

  return [searchApi, results, errorMessage]
}
