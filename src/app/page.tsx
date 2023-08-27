import Image from 'next/image'
import AboutMe from './component/aboutme'
import Skill from './component/skill'


export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center'>

        <AboutMe />
        <Skill />
    </main>
  )
}
