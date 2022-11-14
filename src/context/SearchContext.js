import { createContext, useState } from "react"

export const SearchContext = createContext({
  term: "",
  setTerm: () => {},
})

export const SearchProvider = ({ children }) => {
  const [term, setTerm] = useState("")

  return (
    <SearchContext.Provider value={{ term, setTerm }}>
      {children}
    </SearchContext.Provider>
  )
}
