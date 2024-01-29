import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="navbar absolute left-0 top-0 justify-end bg-base-100">
      <Link className="btn btn-ghost" href="/">
        Home
      </Link>
      <Link className="btn btn-ghost" href="/projects">
        Projects
      </Link>
      {/* <Link className="btn btn-ghost" href="/">
        Contact
      </Link> */}
    </div>
  )
}
