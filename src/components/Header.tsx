import { WEBSITE } from "../lib/constants"

export default function Header() {
  return (
    <header>
      <div>
        <a href={WEBSITE} target="_blank" title="Go to web version">
          <img src="favicon3.png" alt="Digger browser logo" width={60} />
          Digger Browser
        </a>
      </div>
      <div>
        <a
          href={`${WEBSITE}/about`}
          target="_blank"
          title="About in web version"
        >
          About
        </a>
        <a
          href={`${WEBSITE}/donate`}
          target="_blank"
          title="Donate in web version"
        >
          Donate
        </a>
      </div>
    </header>
  )
}
