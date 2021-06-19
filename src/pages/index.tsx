import clsx from 'clsx'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { useState } from 'react'

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
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  return (
    <>
      <Head>
        <title>Jeremy Asuncion</title>
      </Head>

      <main
        className={clsx(
          'w-screen h-screen',
          'bg-gray-900 text-white',
          'flex flex-col items-center justify-center',
        )}
      >
        <TypedHeader onComplete={() => setIsTypingComplete(true)} />

        <motion.nav
          className={clsx(
            'mt-8',
            'flex flex-col md:flex-row',
            'items-center',
            styles.links,
          )}
          initial="hidden"
          animate={isTypingComplete ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          {LINKS.map(({ title, href }) => (
            <Link
              className="hover:text-purple-400 transition-colors my-4 md:my-0 md:mx-7"
              href={href}
              newTab
            >
              {title}
            </Link>
          ))}
        </motion.nav>
      </main>
    </>
  )
}
