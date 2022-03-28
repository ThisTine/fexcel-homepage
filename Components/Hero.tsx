import Link from "next/link"
import { FC, useEffect, useLayoutEffect, useState } from "react"

const Hero:FC = ()=>{
  const [isdemo,setisdemo] = useState(false)
  useEffect(()=>{
    if(localStorage){
    let demo = localStorage.getItem("demo")
    if(demo){setisdemo(true)}
    }
  },[])
    return(
      <>
        <section className='min-h-screen min-w-full flex flex-col justify-center items-center bg-[url(/bg.png)] bg-cover text-[#7355B0]'>
        <div className='container'>
          <h1 data-aos="fade-up" className="text-[3rem] md:text-[6rem] font-bold font-Montserrat-Alternates">Fexcel</h1>        
          <h2 data-aos="fade-up" data-aos-delay="100" className='text-4xl lg:text-7xl font-Dongle' > for excellent Excel experience </h2>
          <div className="flex gap-3 flex-wrap" >
          <Link href="/example"><button  className="flex gap-3 w-fit text-2xl focus:ring-4  items-center bg-purple-400 text-white px-10 py-3 rounded-full hover:bg-purple-500 transition" >{isdemo? "Example" : "Try Demo !"}</button></Link>
          {isdemo && <Link href="/demo"><button  className="flex gap-3 w-fit text-2xl focus:ring-4  items-center bg-blue-400 text-white px-10 py-3 rounded-full hover:bg-blue-500 transition" >Demo</button></Link>}
          </div>
          
        </div>
      </section>
      </>
    )
}

export default Hero