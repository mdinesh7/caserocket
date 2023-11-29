import Image from 'next/image'
import Nav from '@/components/Nav'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Inter } from 'next/font/google'
import { useState } from 'react';
import caseStudiesData from '@/api/caseStudies';

const inter = Inter({ subsets: ['latin'] })

const CustomSeparator = ({ height }: { height: string }) => (
  <div style={{ height, width: '100%', backgroundColor: 'transparent' }} />
);

export default function Home() {

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCaseStudies =
    selectedCategory === 'All'
      ? caseStudiesData
      : caseStudiesData.filter((study) => study.category === selectedCategory);

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

      {/* <ul className="flex items-center text-center justify-center p-24 gap-10">
        <li><a href="">View all</a></li>
        <li><a href="">Strategy</a></li>
        <li><a href="">Marketing</a></li>
        <li><a href="">Finance</a></li>
        <li><a href="">Technology</a></li>
      </ul> */}
      {/* <section className='flex flex-col items-center justify-center gap-8'>

      </section> */}
      <ul className='flex items-center text-center justify-center p-24 gap-10'>
        <li onClick={() => setSelectedCategory('All')}>
          <a href="#">View all</a>
        </li>
        <li onClick={() => setSelectedCategory('Strategy')}>
          <a href="#">Strategy</a>
        </li>
        <li onClick={() => setSelectedCategory('Marketing')}>
          <a href="#">Marketing</a>
        </li>
        <li onClick={() => setSelectedCategory('Finance')}>
          <a href="#">Finance</a>
        </li>
        <li onClick={() => setSelectedCategory('Technology')}>
          <a href="#">Technology</a>
        </li>
      </ul>
      <div className='grid grid-cols-3 gap-10 pb-20'>
        {filteredCaseStudies.map((study, index: number) => (
          <div key={study.id} className='flex-shrink-0'>
            <Card>
              {/* Placeholder for images (to be added later) */}
              <div className='mb-4 bg-gray-300 h-40 w-full'></div>
              <h2 className='text-xl font-bold mb-2'>{study.title}</h2>
              <p>{study.content}</p>
            </Card>
            {/* Add Separator between case study items, except for the last one */}
            {index < filteredCaseStudies.length - 1}
          </div>
        ))}
      </div>
      <section className='flex flex-col items-center justify-center p-24 gap-8'>
        <h1 className='text-1xl font-bold'>Articles</h1>
        <h3 className='text-5xl font-bold'>Explore Case Studies</h3>
        <h1>Browse through our collection of case studies</h1>
      </section>
      <div className='grid grid-cols-3 gap-10 pb-20'>
        <div className='flex-shrink-0 flex-grow-1'>
          <Card className='border-none'>
            {/* Placeholder for images (to be added later) */}
            <div className='mb-4 bg-gray-300 h-40 w-full'></div>
            <h2 className='text-xl font-bold mb-2'>Case Study 1</h2>
            <p>A detailed analysis of a real business scenario.</p>
          </Card>
        </div>
        <div className='flex-shrink-0 flex-grow-1'>
          <Card className='border-none'>
            {/* Placeholder for images (to be added later) */}
            <div className='mb-4 bg-gray-300 h-40 w-full'></div>
            <h2 className='text-xl font-bold mb-2'>Case Study 2</h2>
            <p>Learn more about the challenges faced by a leading company.</p>
          </Card>
        </div>
        <div className='flex-shrink-0 flex-grow-1'>
          <Card className='border-none'>
            {/* Placeholder for images (to be added later) */}
            <div className='mb-4 bg-gray-300 h-40 w-full'></div>
            <h2 className='text-xl font-bold mb-2'>Case Study 3</h2>
            <p>Discover innovaive solutions implemented by a startup.</p>
          </Card>
        </div>
      </div>

      <section className='py-24 flex flex-col items-start text-left gap-8'>
        <h1 className='text-1xl font-bold'>Innovative</h1>
        <h1 className='text-5xl font-bold'>Generate Case Studies
          <br></br>
          with AI Technology</h1>
        <p className='text-1xl text-primary'>Our AI Case Study Generator simplifies the process of creating a case
          <br></br>
          studies, saving you time and effort. With just a few clicks, you can
          <br></br>
          generate high-quality case studies tailored to your needs</p>
        <div className='flex gap-6 items-start justify-left'>
          <div>
            <h1 className='text-1xl font-bold'>Efficient Solution</h1>
            <p className='text-1xl text-primary'>Create custom case studies effortlessly
              <br></br>
              and showcase your problem-solving
              <br></br>
              skills effectively.</p>
          </div>
          <div>
            <h1 className='text-1xl font-bold'>Streamlined Process</h1>
            <p className='text-1xl text-primary'>Our AI-powered platform makes it easy
              <br></br>
              to generate case studies that impress.</p>
          </div>
        </div>
        <div className='flex gap-6 items-start justify-left'>
          <Button className='bg-white border border-black text-black'>Get Started</Button>
          <Button className='bg-white no-border text-black'>Learn More ></Button>
        </div>
      </section>

    </main>
  )
}
