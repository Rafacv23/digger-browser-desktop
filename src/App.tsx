import { useState } from "react"
import "./App.css"
import { fetch } from "@tauri-apps/plugin-http"
import Form from "./components/Form"
import Hero from "./components/Hero"
import { PreSearchMenu, ResultsMenu } from "./components/Menu"
import { ApiResponse } from "./types/types"

function App() {
  const [query, setQuery] = useState<string>("")
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [searchResults, setSearchResults] = useState<ApiResponse | null>(null)

  async function fetchData() {
    try {
      setLoading(true)
      // Fetching data from the API
      const res = await fetch(
        `https://digger-browser.vercel.app/api/search?q=${query}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      // Parse response to JSON if needed
      const jsonData = await res.json()

      // Log response
      console.log(jsonData)

      setLoading(false)

      // Update search results state
      setSearchResults(jsonData)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  return (
    <main className="container">
      <Hero />
      <Form
        setQuery={setQuery}
        fetchData={fetchData}
        setShowMenu={setShowMenu}
      />
      {loading ? (
        "Loading..."
      ) : searchResults ? (
        <ResultsMenu data={searchResults} />
      ) : showMenu ? (
        <PreSearchMenu />
      ) : null}
    </main>
  )
}

export default App
