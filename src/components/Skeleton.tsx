import "../styles/skeleton.css"

export default function Skeleton({ query }: { query: string }) {
  return (
    <div className="skeleton-container">
      <div className="skeleton-title">Searching for {query}</div>

      <h2 className="skeleton-heading">Pages</h2>
      <ul className="skeleton-list">
        <li className="skeleton-list-item"></li>
        <li className="skeleton-list-item smaller"></li>
        <li className="skeleton-list-item smaller"></li>
      </ul>

      <h2 className="skeleton-heading">Results</h2>
      <div className="skeleton-results">
        <div className="skeleton-item"></div>
        <div className="skeleton-item smaller"></div>
        <div className="skeleton-item"></div>
        <div className="skeleton-item smaller"></div>
      </div>
    </div>
  )
}
