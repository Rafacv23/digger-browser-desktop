import { useState } from "react"
import "./App.css"
import { fetch } from "@tauri-apps/plugin-http"
import Form from "./components/Form"
import Hero from "./components/Hero"

function App() {
  const [query, setQuery] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [searchResults, setSearchResults] = useState<string | null>(null)

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
      <Form setQuery={setQuery} fetchData={fetchData} />
      {loading ? (
        "Loading..."
      ) : (
        <pre>{JSON.stringify(searchResults, null, 2)}</pre>
      )}
    </main>
  )
}

export default App
