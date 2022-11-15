import { createContext, useState, useEffect } from "react"

export const SearchContext = createContext({
  term: "",
  setTerm: () => {},
})

export const SearchProvider = ({ children }) => {
  const [term, setTerm] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    setSearchTerm("Pizza")
  }, [])

  return (
    <SearchContext.Provider
      value={{ term, setTerm, searchTerm, setSearchTerm }}
    >
      {children}
    </SearchContext.Provider>
  )
}
