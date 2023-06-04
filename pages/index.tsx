import type { NextPage } from 'next'
import Link from 'next/link'
import About from '../Components/About'
import Benefits from '../Components/Benefits'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import HowItWorks from '../Components/HowItWorks'

const Home: NextPage = () => {
  return (
    <main>
      <Hero/>
      <About/>
      <HowItWorks/>
      <Benefits/>
      {/* <section className='flex justify-center my-10'>
        <Link href="/plans"><a className='px-10 py-5 bg-[#FEA8BD] hover:bg-[#f883a0] transition text-2xl font-bold rounded-full' data-aos="flip-up" data-aos-duration="1000" >View Our Plans</a></Link> 
      </section> */}
    </main>
  )
}

export default Home
