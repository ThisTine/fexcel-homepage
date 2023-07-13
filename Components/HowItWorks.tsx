import { FC } from "react";
import Lottie from 'lottie-react'
import howitworks from '../animation/howtouse.json'

const HowItWorks:FC = ()=>{
    return(
      <section className='flex flex-col items-center'>
        <div className='bg-[#E2E6F9] w-full overflow-hidden' > <h1 className='text-center font-bold text-5xl lg:text-7xl py-3 font-Dongle  ' data-aos="flip-up" >How does Fexcel work ? </h1> </div>
        <div className=' container flex flex-col-reverse gap-5 lg:flex-row-reverse my-10 items-center'>
          <div className=' flex-[6] flex flex-col gap-5 items-center'>
              <div className="w-full lg:w-2/3 flex flex-col gap-5 items-center">
              <div className="rounded-lg shadow-lg w-full  p-2 px-10  " data-aos="fade-up">
            <h3 className='text-3xl font-semibold' >Fexcel แปลงข้อความเป็นสูตร Excel</h3>
            <p className="mt-5 text-center">Fexcel ช่วยให้การใช้งาน Excel ง่ายยิ่งขึ้นโดยใช้ความสามารถของ AI <br/> ซึ่งจะสามารถช่วยให้ผู้ใช้งานไม่ต้องกังวลกับการจำสูตรต่าง ๆ อีกต่อไป</p>
            </div>
            <div className="flex w-full items-center gap-3" >
                <div className="flex-grow w-full h-[1px] bg-black" ></div>
                <p className="flex-1 whitespace-nowrap">นอกจากนี้ Fexcel ยังสามารถ</p>
                <div className="flex-grow w-full h-[1px] bg-black" ></div>
            </div>
            <div className="opacity-50 flex flex-col items-center gap-3">
            <h4 data-aos="fade-up" data-aos-delay="100" className='text-xl p-2 px-10 rounded-full shadow-md  w-fit font-semibold'>Fexcel อธิบายที่มาของสูตร</h4>
            <h4 data-aos="fade-up" data-aos-delay="200" className='text-xl p-2 px-10 rounded-full shadow-md w-fit font-semibold'>Fexcel ช่วยเรียกดูสูตรที่ใช้บ่อย</h4>
            <h4 data-aos="fade-up" data-aos-delay="300" className='text-xl p-2 px-10 rounded-full shadow-md w-fit font-semibold'>Fexcel ช่วยเปรียบเทียบสูตรที่คล้ายกัน</h4>
            </div>
              </div>
          </div>
          <div className='flex-[3] w-full h-full aspect-square bg-black' >
            <Lottie animationData={howitworks} loop={true} />
          </div>
        </div>
      </section>
    )
}

export default HowItWorks