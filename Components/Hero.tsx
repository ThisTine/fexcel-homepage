import { FC } from "react"

const Hero:FC = ()=>{
    return(
        <section className='min-h-screen min-w-full flex flex-col justify-center items-center bg-[url(/bg.png)] bg-cover text-[#7355B0]'>
        <div className='container'>
          <h1 data-aos="fade-up" className="text-[6em] font-bold font-Montserrat-Alternates">Fexcel</h1>        
          <h2 data-aos="fade-up" data-aos-delay="100" className='text-4xl lg:text-7xl font-Dongle' > for excellent Excel experience </h2>
        </div>
      </section>
    )
}

export default Hero