import { WEBSITE } from "../lib/constants"

export default function Hero() {
  return (
    <div className="hero">
      <div className="row">
        <a href={WEBSITE} target="_blank">
          <img
            src="/favicon3.png"
            className="logo vite"
            alt="Digger browser logo"
          />
        </a>
      </div>
      <h1 className="title">
        Welcome to
        <span>Digger</span>
      </h1>
      <p>The next generation browser that summarizes the web for you.</p>
    </div>
  )
}
