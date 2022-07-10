import clsx from 'clsx'
import Typed from 'react-typed'

import styles from './TypedHeader.module.css'

const TYPING_SPEED = 30
const STRINGS = [
  'Frontend Engineer',
  'SJSU Alumni',
  'Skateboarder',
  'Llama Enthusiast',
]

export function TypedHeader() {
  return (
    <h2 className={clsx(styles.header, 'text-center')}>
      <Typed
        backSpeed={TYPING_SPEED}
        strings={STRINGS}
        typeSpeed={TYPING_SPEED}
        loop
      />
    </h2>
  )
}
