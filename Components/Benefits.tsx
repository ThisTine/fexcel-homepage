import { FC } from "react";
import timesaving from '../animation/time.json'
import accuonting from '../animation/accounting.json' 
import formula from '../animation/working-woman.json'
import tick from '../animation/correct-tick.json'
import Lottie from 'lottie-react'

const benefitsitems = [
    {msg:"ประหยัดเวลาเเละใช้งานง่าย",ani:timesaving},
    {msg:"ไม่ต้องมีพื้นฐานการใช้ Excel",ani:accuonting},
    {msg:"เรียนรู้สูตรต่างๆ ไปกับเรา",ani:formula},
    {msg:"ตรวจสอบความถูกต้องได้มากกว่า",ani:tick},
]

const Benefits:FC = ()=>{
    return(
        <section className='flex flex-col items-center'>
        <div className='bg-[#E2E6F9] w-full overflow-hidden'  > <h1 className='text-center font-bold text-6xl lg:text-8xl py-3 font-Dongle' data-aos="flip-up" >Benefits</h1> </div>
        <div className="container" >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 my-10" >
                {benefitsitems.map((item,ind)=><div key={ind} className="w-full flex flex-col items-center gap-10" >
                    <div data-aos="fade-up" data-aos-delay={ind*100} className="w-full aspect-square bg-yellow-100 rounded-full flex justify-center p-10 m-10" >
                        <Lottie animationData={item.ani} loop={true} />
                    </div>
                    <h3 data-aos="fade-up" data-aos-delay={ind*100+20} className="text-center font-bold" >{item.msg}</h3>
                </div>)}
                
            </div>
        </div>
        
      </section>
    )
}

export default Benefits