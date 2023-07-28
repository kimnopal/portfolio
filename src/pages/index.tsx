import Hero from '@/components/Fragments/Hero'
import Project from '@/components/Fragments/Project'
import Skill from '@/components/Fragments/Skill'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Hero />
      <Skill />
      <Project />
    </>
  )
}
