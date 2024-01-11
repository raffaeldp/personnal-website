import NameCard from '@/components/name-card/name-card'
import Link from 'next/link'

export default function Home() {
  const test = 'bonjour'

  return (
    <div className="flex h-full flex-col gap-8">
      <h1 className="text-8xl">Hey !</h1>
      <div className="flex h-full w-full items-center justify-around">
        <button className="btn">See my projects</button>
        <div className="flex flex-col items-end">
          <NameCard />
          <p>French web developper</p>
        </div>
      </div>
    </div>
  )
}
