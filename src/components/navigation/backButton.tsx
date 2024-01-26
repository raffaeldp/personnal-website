'use client'

import { ArrowLeftIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function BackButton() {
  const router = useRouter()

  const goBack = () => {
    router.back()
  }

  return (
    <button
      className="flex w-fit items-center gap-2 text-slate-400 transition-colors duration-300 hover:text-slate-500"
      onClick={() => goBack()}
    >
      <ArrowLeftIcon />
      <p>go back</p>
    </button>
  )
}
