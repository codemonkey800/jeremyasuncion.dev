import clsx from 'clsx'
import { motion } from 'framer-motion'
import { IconType } from 'react-icons'
import {
  FaGithub as GitHubIcon,
  FaRegListAlt as ResumeIcon,
} from 'react-icons/fa'

import { Link } from './Link'

type LinkBubbleType = 'github' | 'resume'

interface LinkData {
  title: string
  href: string
  Icon: IconType
}

const LINK_DATA: Record<LinkBubbleType, LinkData> = {
  github: {
    title: 'GitHub',
    href: 'https://github.com/codemonkey800',
    Icon: GitHubIcon,
  },

  resume: {
    title: 'Resume',
    href: 'https://docs.google.com/document/d/1UuYtMBEKhBPg2Wah5g6iR_RAbVvU86LvHoHkH7pS3Ig/edit?usp=sharing',
    Icon: ResumeIcon,
  },
}

interface LinkBubbleProps {
  type: LinkBubbleType
}

function LinkBubble({ type }: LinkBubbleProps) {
  const { Icon, href, title } = LINK_DATA[type]

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        href={href}
        className={clsx(
          'flex gap-3',
          'p-3 rounded-full',
          'transition-colors',
          type === 'github' && 'hover:bg-[#4078c0]',
          type === 'resume' && 'hover:bg-[#673ab7]',
        )}
      >
        <Icon color="#fff" size={24} />
        <span className="text-white">{title}</span>
      </Link>
    </motion.div>
  )
}

interface LinkBubblesProps {
  className?: string
}

export function LinkBubbles({ className }: LinkBubblesProps) {
  const types: LinkBubbleType[] = ['github', 'resume']

  return (
    <div className={clsx(className, 'flex flex-wrap items-center gap-6')}>
      {types.map(type => (
        <LinkBubble key={type} type={type} />
      ))}
    </div>
  )
}
