import clsx from 'clsx'
import Head from 'next/head'

import { LinkBubbles, TypedHeader } from 'src/components'

import styles from './index.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jeremy Asuncion</title>
        <meta
          name="description"
          content="Frontend Engineer and llama enthusiast."
        />
      </Head>

      <LinkBubbles className="absolute top-4 right-4" />

      <main
        className={clsx(
          'w-screen h-screen',
          'bg-gray-900 text-white',
          'flex flex-col items-center justify-center',
        )}
      >
        <h1 className={clsx(styles.header, 'mb-2 text-center')}>
          Jeremy Asuncion
        </h1>
        <TypedHeader />
      </main>
    </>
  )
}
