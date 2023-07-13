import { FC } from "react";
import Lottie from 'lottie-react'
import howitworks from '../animation/howtouse.json'

const NewFeatures:FC = ()=>{
    return(
        <section className='flex flex-col items-center'>
        <div className='bg-[#E2E6F9] w-full overflow-hidden' > <h1 className='text-center font-bold text-5xl lg:text-7xl py-3 font-Dongle  ' data-aos="flip-up" >Upcoming Features </h1> </div>
        
        <div className=' container flex flex-col-reverse gap-2 lg:flex-row-reverse my-10 h-80 items-center'>
          <div className=' flex-[6] flex flex-col items-center'>
              <div className="w-full lg:w-2/3 flex flex-col gap-5 items-center">
              <div className="rounded-lg shadow-lg w-full  p-2 px-12  " data-aos="fade-up">
            <h3 className='text-3xl font-semibold' >Auto-Correction</h3>
            <p className="mt-5 text-center">เป็นฟังก์ชันที่ออกแบบมาเพื่อช่วยให้ใช้สูตรใน Excel <br/> ได้อย่างง่ายดายและมีประสิทธิภาพมากขึ้นกว่าเดิม <br/> 
                                            สามารถแก้ไขสูตรที่ผิดจากการตรวจสอบอัตโนมัติขณะคุณกำลังพิมพ์ <br/> แล้วให้ข้อเสนอและการแก้ไขแบบเรียลไทม์ <br/> 
                                            เพื่อให้แน่ใจว่าสูตรของคุณถูกต้องและไม่มีข้อผิดพลาด</p>
            </div>
            </div>      
          </div>
          <div className='flex-[3] mx-20 w-full h-full aspect-square bg-white' >
          <img src={"/autocorrect.png"} className="h-full" data-aos='fade-up'/>
          </div>
        </div>

        <div className=' container flex flex-col-reverse gap-2 lg:flex-row-reverse my-10 h-80 items-center'>
          <div className='flex-[3] mx-20 w-full h-full aspect-square bg-white' >
          <img src={"/recentfrequent.png"} className="h-full" data-aos='fade-up'/>
          </div>
          <div className=' flex-[6] flex flex-col gap-5 items-center'>
              <div className="w-full lg:w-2/3 flex flex-col items-center">
              <div className="rounded-lg shadow-lg w-full  p-2 px-12  " data-aos="fade-up">
            <h3 className='text-3xl font-semibold' >Useful Functions</h3>
            <p className="mt-5 text-center">ชุดฟังก์ชั่นใหม่ที่มีประโยชน์เพื่อยกระดับประสบการณ์ในการใช้งาน Excel ของคุณ<br/> ฟังก์ชั่นเหล่านี้ถูกออกแบบเพื่อทำให้งานต่างๆมีความซับซ้อนน้อยลง <br/> ลดเวลาในการทำงาน และเพิ่มประสิทธิภาพของงานได้อย่างมาก</p>
            </div>
            <div className="flex w-full items-center gap-3" >
                <div className="flex-grow w-full h-[1px] bg-black" ></div>
                <p className="flex-1 whitespace-nowrap">ประกอบไปด้วย</p>
                <div className="flex-grow w-full h-[1px] bg-black" ></div>
            </div>
            <div className="opacity-50 flex flex-col items-center">
            <h4 data-aos="fade-up" data-aos-delay="100" className='text-xl p-2 px-10 rounded-full shadow-md w-fit font-semibold'>Recently Used (สูตรที่ใช้งานล่าสุด)</h4>
            <h4 data-aos="fade-up" data-aos-delay="200" className='text-xl p-2 px-10 rounded-full shadow-md w-fit font-semibold'>Frequently Used (สูตรที่ใช้งานบ่อยที่สุด)</h4>
            </div>
              </div>
          </div>
        </div>

        <div className=' container flex flex-col-reverse gap-2 lg:flex-row-reverse my-10 h-80 items-center'>
          <div className=' flex-[6] flex flex-col gap-5 items-center'>
              <div className="w-full lg:w-2/3 flex flex-col gap-5 items-center">
              <div className="rounded-lg shadow-lg w-full  p-2 px-12  " data-aos="fade-up">
            <h3 className='text-3xl font-semibold' >Custom Template</h3>
            <p className="mt-5 text-center">เทมเพลตที่กำหนดเองเป็นเอกสารสเปรดชีต Excel <br/> ซึ่งออกแบบมาเพื่อตอบสนองต่องานและกระบวนการของคุณ <br/> 
                                            มีสูตรที่กำหนดไว้ล่วงหน้า การจัดรูปแบบ และเค้าโครง <br/> ที่ช่วยให้คุณประหยัดเวลาโดยไม่ต้องสร้างเอกสารใหม่จากต้นแบบ <br/> 
                                            เพื่อให้คุณทำงานได้อย่างรวดเร็วและมีประสิทธิภาพ</p>
            </div>
            </div>      
          </div>
          <div className='flex-[3] mx-20 w-full h-full aspect-square bg-white' >
          <img src={"/customtemplate.png"} className="h-full" data-aos='fade-up'/>
          </div>
        </div>

        </section>

        
    )
}

export default NewFeatures