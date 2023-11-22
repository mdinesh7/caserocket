import Image from 'next/image'
import Nav from '@/components/Nav'
import { Button } from '@/components/ui/button'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='p-24'>
      <Nav />
      <section className='py-24 flex flex-col items-start text-left gap-8'>
        <h1 className='text-4xl font-bold'>Prepare for case</h1>
        <h1 className='text-4xl font-bold'>study Interviews with</h1>
        <h1 className='text-4xl font-bold'>ease</h1>
        <p className='text-1xl text-primary'>Master the art of case study interviews and land your dream job</p>
        <div className='flex gap-6 items-start justify-left'>
          <Button>Get Started</Button>
          <Button>Learn More</Button>
        </div>
      </section>
      <section className='flex flex-col items-center justify-center gap-8'>
        <h1 className='text-1xl font-bold'>Latest</h1>
        <h3 className='text-5xl font-bold'>Discover New Case Studies</h3>
        <h1>Explore a selection of featured case studies.</h1>
      </section>

      <ul className="flex items-center text-center justify-center p-24 gap-10">
        <li><a href="">View all</a></li>
        <li><a href="">Strategy</a></li>
        <li><a href="">Marketing</a></li>
        <li><a href="">Finance</a></li>
        <li><a href="">Technology</a></li>
      </ul>
      <section className='flex flex-col items-center justify-center gap-8'>

      </section>
    </main>
  )
}
