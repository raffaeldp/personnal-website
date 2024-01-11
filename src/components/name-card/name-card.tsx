'use client'

import { useState } from 'react'
import styles from './name-card.module.scss'

export default function NameCard() {
  const [transformStyle, setTransformStyle] = useState<string>('')
  const [glowStyle, setGlowStyle] = useState<string>('')

  const handleMouseMove = (event: any) => {
    const elementRect = event.currentTarget.getBoundingClientRect()

    const cardCenterX = event.clientX - elementRect.x
    const cardCenterY = event.clientY - elementRect.y

    const midCardWidth = elementRect.width / 2
    const midCardHeight = elementRect.height / 2

    const angleY = (cardCenterX - midCardWidth) / 8
    const angleX = (cardCenterY - midCardHeight) / 8

    const glowX = (cardCenterX / elementRect.width) * 100
    const glowY = (cardCenterY / elementRect.height) * 100

    setTransformStyle(`rotateY(${angleY}deg) rotateX(${angleX}deg)`)
    setGlowStyle(
      `radial-gradient(circle at ${glowX}% ${glowY}%,rgba(200, 200, 200, 1), transparent)`
    )
  }

  const handleMouseLeave = () => {
    setTransformStyle('rotateY(0deg) rotateX(0deg)')
    setGlowStyle(
      `radial-gradient(circle at ${0}% ${0}%,rgba(200, 200, 200, 1), transparent)`
    )
  }

  return (
    <div className="container">
      <div
        className={
          styles.perspective +
          ' h-full w-full transition-transform hover:scale-110'
        }
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={styles.transitionCard + ' h-full w-full'}
          style={{ transform: transformStyle }}
        >
          <div className="overflow-hidden rounded-3xl border border-gray-100 bg-black/20 bg-clip-padding p-16 text-end text-7xl backdrop-blur-md backdrop-filter">
            <p>Raffael</p>
            <p>Di Pietro</p>
          </div>
        </div>
        <div
          className={`${styles.perspective} ${styles.transitionCard} absolute left-0 top-0 h-full w-full rounded-3xl mix-blend-hard-light`}
          style={{
            transform: transformStyle,
            background: glowStyle,
          }}
        ></div>
      </div>
    </div>
  )
}
