import { Github, PersonStanding } from "lucide-react"
import { GITHUB_REPO, PORTFOLIO } from "../lib/constants"

export default function Footer() {
  return (
    <footer>
      <a
        href={GITHUB_REPO}
        target="_blank"
        title="Open github repository"
        rel="noopener noreferrer"
      >
        <Github size={16} />
        GitHub
      </a>
      <a href={PORTFOLIO} title="Rafa Canosa portfolio" target="_blank">
        <PersonStanding size={16} />
        Portfolio
      </a>
    </footer>
  )
}
