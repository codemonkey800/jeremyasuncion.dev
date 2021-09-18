import clsx from 'clsx'
import Head from 'next/head'

import { Link, TypedHeader } from 'src/components'

import styles from './index.module.css'

const LINKS = [
  {
    title: 'GitHub',
    href: 'https://github.com/codemonkey800',
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jeremyasuncion',
  },
  {
    title: 'Resume',
    href: 'https://docs.google.com/document/d/1UuYtMBEKhBPg2Wah5g6iR_RAbVvU86LvHoHkH7pS3Ig/edit?usp=sharing',
  },
]

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

        <nav
          className={clsx(
            'mt-8',
            'flex flex-col md:flex-row',
            'items-center',
            styles.links,
          )}
        >
          {LINKS.map(({ title, href }) => (
            <Link
              key={href}
              className="hover:text-purple-400 transition-colors my-4 md:my-0 md:mx-7"
              href={href}
              newTab
            >
              {title}
            </Link>
          ))}
        </nav>
      </main>
    </>
  )
}
