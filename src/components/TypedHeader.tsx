import clsx from 'clsx'
import { useEffect, useState } from 'react'
import Typed from 'react-typed'
import { useLocalStorage } from 'react-use'

import styles from './TypedHeader.module.css'

const TYPING_SPEED = 30
const NAME = 'Jeremy Asuncion'
const STRINGS = [
  'Frontend Engineer',
  'CZI',
  'SJSU Alumni',
  'Skateboarder',
  'Steak Enthusiast',
]

interface Props {
  onComplete?(): void
}

const noop = () => {}

export function TypedHeader({ onComplete = noop }: Props) {
  const [lastVisitedTime, setLastVisitedTime] =
    useLocalStorage<number>('last-visited')
  const [hasAllStrings, setHasAllStrings] = useState(false)

  useEffect(() => {
    const lastVisited = new Date(lastVisitedTime ?? 0)
    const now = new Date()

    if (
      now.getMonth() > lastVisited.getMonth() ||
      now.getFullYear() > lastVisited.getFullYear()
    ) {
      setHasAllStrings(true)
      setLastVisitedTime(now.getTime())
    }
  }, [lastVisitedTime, setLastVisitedTime])

  const strings: string[] = []

  if (hasAllStrings) {
    strings.push(...STRINGS)
  }

  strings.push(NAME)

  return (
    <h1 className={clsx(styles.header, 'text-center')}>
      <Typed
        backSpeed={TYPING_SPEED}
        onComplete={onComplete}
        strings={strings}
        typeSpeed={TYPING_SPEED}
      />
    </h1>
  )
}
