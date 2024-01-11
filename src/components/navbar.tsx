import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    // <div className="absolute left-0 top-0 flex h-28 w-full items-center px-10">
    // </div>
    <div className="navbar absolute left-0 top-0 justify-end bg-base-100">
      <Link className="btn btn-ghost" href="/">
        home
      </Link>
      <Link className="btn btn-ghost" href="/">
        projects
      </Link>
      <Link className="btn btn-ghost" href="/">
        contact
      </Link>
    </div>
  )
}
