import { Search } from "lucide-react"

interface FormProps {
  fetchData: () => void
  setQuery: (query: string) => void
  setShowMenu: (showMenu: boolean) => void
  loading: boolean
}

export default function Form({
  fetchData,
  setQuery,
  setShowMenu,
  loading,
}: FormProps) {
  return (
    <form
      className="row"
      onSubmit={(e) => {
        e.preventDefault()
        fetchData()
      }}
    >
      <input
        id="greet-input"
        onChange={(e) => setQuery(e.currentTarget.value)}
        placeholder="I will summarize this for you..."
        onClick={() => setShowMenu(true)}
        disabled={loading}
      />
      <button type="submit" disabled={loading}>
        {loading ? (
          "Searching..."
        ) : (
          <span>
            <Search size={16} />
            Search
          </span>
        )}
      </button>
    </form>
  )
}
