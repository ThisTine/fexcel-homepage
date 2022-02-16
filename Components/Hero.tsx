import { FC } from "react"
import { useModel } from "../hooks/useModel"
import ETCModal from "./modal/ETCModal"

const Hero:FC = ()=>{
  const [isOpen,onOpen,onClose] = useModel()

    return(
      <>
      <ETCModal isOpen={isOpen} onClose={onClose} ></ETCModal>
        <section className='min-h-screen min-w-full flex flex-col justify-center items-center bg-[url(/bg.png)] bg-cover text-[#7355B0]'>
        <div className='container'>
          <h1 data-aos="fade-up" className="text-[6em] font-bold font-Montserrat-Alternates">Fexcel</h1>        
          <h2 data-aos="fade-up" data-aos-delay="100" className='text-4xl lg:text-7xl font-Dongle' > for excellent Excel experience </h2>
          <button onClick={onOpen} className="flex gap-3 w-fit items-center bg-purple-400 text-white px-10 py-3 rounded-full hover:bg-purple-500 transition" >Try Free !</button>
        </div>
      </section>
      </>
    )
}

export default Hero