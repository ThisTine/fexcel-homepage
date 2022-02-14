import { FC } from "react";
import Lottie from "lottie-react";
import groupwork from '../animation/group-working.json'
const About:FC = ()=>{
    return(
        <section className='flex flex-col items-center'>
        <div className='bg-[#E2E6F9] w-full overflow-hidden' > <h1 className='text-center text-7xl py-3 font-Dongle lg:text-8xl' data-aos="flip-up" >What is <span className="font-bold text-4xl lg:text-7xl">Fexcel</span> ? </h1> </div>
        <div className=' container flex flex-col-reverse lg:flex-row my-10 items-center'>
          <div className=' flex-[3] flex flex-col gap-5'>
            <h1 data-aos="fade-up" className='text-5xl font-bold'>Fexcel</h1>
            <p data-aos="fade-up" data-aos-delay="100"  className='text-2xl' >คือบริการ Plug-in สำหรับ Excel ที่สามารถเเปลงประโยคทั่วไปให้เป็นสูตรคำสั่ง ทำให้คุณสามารถเริ่มใช้งาน Excel ได้
            โดยไม่จำเป็นต้องมีพื้นฐาน</p>
          </div>
          <div className='flex-[2] w-2/3 lg:w-full h-full aspect-square ' >
            <Lottie animationData={groupwork} loop={true} />
          </div>
        </div>
      </section>
    )
}

export default About