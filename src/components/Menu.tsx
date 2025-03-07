import { retrieveDomain } from "../lib/utils"
import { ExternalLink } from "lucide-react"
import { ApiResponse } from "../types/types"
import { Badge } from "./Badge"

export function ResultsMenu({ data }: { data: ApiResponse }) {
  return (
    <div>
      <h2>{data.query}</h2>
      <h2>Pages</h2>
      <ul>
        {data.pages.map((page) => (
          <a
            key={page.link}
            target="_blank"
            rel="noopener noreferrer"
            href={page.link}
          >
            {retrieveDomain(page.link)} | {page.title}
            <ExternalLink size={16} />
          </a>
        ))}
      </ul>
      <h2>Results</h2>
      <article>
        {data.resume.split("\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </article>
    </div>
  )
}

// menu for recent searches, displays before the user have results
export function PreSearchMenu() {
  const recentSearchs: ApiResponse[] = [
    {
      query: "test",
      pages: [
        {
          title: "Test Page",
          link: "https://www.test.com",
        },
      ],
      resume: "This is a test resume",
    },
    {
      query: "test",
      pages: [
        {
          title: "Test Page",
          link: "https://www.test.com",
        },
      ],
      resume: "This is a test resume",
    },
    {
      query: "test",
      pages: [
        {
          title: "Test Page",
          link: "https://www.test.com",
        },
      ],
      resume: "This is a test resume",
    },
  ]

  const related = recentSearchs.map((search: ApiResponse) => {
    return search.pages.map((page) => ({
      title: page.title,
      link: page.link,
    }))
  })

  return recentSearchs.length > 0 ? (
    <div>
      <h2>Recent</h2>
      <ul className="recentSearchsList">
        {recentSearchs.map((search: ApiResponse) => (
          <Badge query={search.query} key={search.query} />
        ))}
      </ul>
      <h2>Related</h2>
      <ul className="list">
        {related.map((pages) => (
          <li key={pages[0].title}>
            <ul className="list">
              {pages.map((page) => (
                <li key={page.title}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={page.link}
                    className="list-item"
                  >
                    {retrieveDomain(page.link)} | {page.title}
                    <ExternalLink size={16} />
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  ) : null
}

// Displays the controlls for the menu
export function FooterMenu() {
  return (
    <footer>
      <h2>Controlls</h2>
    </footer>
  )
}
