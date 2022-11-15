import { useEffect, useState } from "react"
import yelp from "../api/yelp"

export default () => {
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
      console.log(err)
      setErrorMessage("Something went wrong")
    }
  }

  useEffect(() => {
    searchApi("Pasta")
  }, [])

  return [searchApi, results, errorMessage]
}
