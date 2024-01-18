import NameCard from '@/components/name-card/name-card'
import { MapPinIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const test = 'bonjour'

  return (
    <div className="flex h-full flex-col gap-8">
      <div className="hero min-h-full items-start justify-start pt-4">
        <div className="hero-content flex-row">
          <Image
            className="rounded-full"
            src={'/moi_rogne.png'}
            width={150}
            height={150}
            alt="me"
          />
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl font-bold">Raffael Di Pietro</h1>
            <div className="flex flex-col gap-2">
              <p>French web developper</p>
              <div className="flex gap-3">
                <MapPinIcon />
                <p>Strasbourg, France</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
