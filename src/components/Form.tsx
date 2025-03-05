interface FormProps {
  fetchData: () => void
  setQuery: (query: string) => void
}

export default function Form({ fetchData, setQuery }: FormProps) {
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
      />
      <button type="submit">Search</button>
    </form>
  )
}
