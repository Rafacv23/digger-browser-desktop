import { useState } from "react"
import reactLogo from "./assets/react.svg"
import { invoke } from "@tauri-apps/api/core"
import "./App.css"
import { fetch } from "@tauri-apps/plugin-http"

function App() {
  const [greetMsg, setGreetMsg] = useState("")
  const [name, setName] = useState("")
  const [searchResults, setSearchResults] = useState(null)

  async function greet() {
    // Greet message
    setGreetMsg(await invoke("greet", { name }))

    const query = "resultado madrid atleti"
    try {
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

      // Update search results state
      setSearchResults(jsonData)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  return (
    <main className="container">
      <h1>Welcome to Tauri + React</h1>

      <div className="row">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p>Click on the Tauri, Vite, and React logos to learn more.</p>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault()
          greet()
        }}
      >
        <input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <button type="submit">Greet</button>
      </form>
      <p>{greetMsg}</p>

      <div>
        <h2>Search Results</h2>
        {searchResults ? (
          <pre>{JSON.stringify(searchResults, null, 2)}</pre>
        ) : (
          <p>No results yet</p>
        )}
      </div>
    </main>
  )
}

export default App
