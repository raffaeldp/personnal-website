import { Experience } from '@/models/experience'

export function getStartingDate(experience: Experience): string {
  return experience.startingDate.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  })
}

export function getEndingDate(experience: Experience): string {
  return experience.endingDate
    ? experience.endingDate.toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric',
      })
    : 'Today'
}
