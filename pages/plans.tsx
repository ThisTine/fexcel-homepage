import { NextPage } from "next"
import Head from "next/head"
import Footer from "../Components/Footer"
import ETCModal from "../Components/modal/ETCModal"
import PlanCard from "../Components/PlanCard"
import { useModel } from "../hooks/useModel"

const Plans:NextPage = ()=>{
    const [isOpen,onOpen,onClose] = useModel()
    return(
    <>
    <Head>
    <title>Plans - Fexcel</title>

    </Head>
    <ETCModal isOpen={isOpen} onClose={onClose} ></ETCModal>
    <main className="min-h-screen bg-[#D2E1E8]">
        <div className="w-full h-20"></div>
        <div className="container mx-auto mt-10 flex flex-col" >
        <h1 className="text-8xl text-center font-Dongle " data-aos="fade-up" >Try Fexcel Now !</h1>

        <section className="flex flex-col lg:flex-row gap-16 justify-center mt-20 mb-20">
            <div className="flex flex-col gap-10 justify-center items-center">
                <h2 className="text-8xl font-bold font-Dongle" data-aos="fade-up" data-aos-delay="100">Free</h2>
                <PlanCard aos={{"data-aos":"fade-up" ,"data-aos-delay":"200"}} name="Basic" description="เริ่มต้นด้วย Feature พื้นฐาน โดยไม่ต้องเสียค่าใช้จ่าย" lists={['สอนใช้ tools พื้นฐาน','แปลงประโยคเป็นสูตร Excel','ใช้ได้กับทั้ง Excel เเละ Google sheets']} price={0} />
                <button onClick={onOpen} className='px-16 py-5 bg-[#FEA8BD] text-2xl font-bold rounded-3xl hover:bg-[#ED9590] transition whitespace-nowrap'>Try Free !</button>
            </div>
            <div className="flex flex-col  gap-10 justify-center items-center">
                <h2 className="text-8xl font-bold font-Dongle" data-aos="fade-up" data-aos-delay="150">Premium</h2>
                <div className="flex gap-3 flex-col lg:flex-row">
                <PlanCard aos={{"data-aos":"fade-up" ,"data-aos-delay":"200"}} name="Individual Plan" description="เริ่มต้นด้วย Premium Feature แบบส่วนบุคคล" lists={['สอนใช้ tools พื้นฐาน','แปลงประโยคเป็นสูตร Excel','ใช้ได้กับทั้ง Excel เเละ Google sheets','สามารถเรียกดูสูตรที่ใช้บ่อย/จำเป็นต้องใช้ได้','เรียกดูวิธีทำเเบบอื่นๆได้']} price={69} />
                <PlanCard aos={{"data-aos":"fade-up" ,"data-aos-delay":"300"}} name="Group Plan" description="เริ่มต้นด้วย Feature Premium  เเบบกลุ่ม สามารถรองรับผู้ใช้งาน ได้สูงสุดถึง 12 คน" lists={['สอนใช้ tools พื้นฐาน','แปลงประโยคเป็นสูตร Excel','ใช้ได้กับทั้ง Excel เเละ Google sheets','สามารถเรียกดูสูตรที่ใช้บ่อย/จำเป็นต้องใช้ได้','เรียกดูวิธีทำเเบบอื่นๆได้','รองรับได้สูงสุด 12 ผู้ใช้งาน']} price={599} />
                </div>
                <button  onClick={onOpen} className='px-16 py-5 bg-[#FEA8BD] text-2xl font-bold rounded-3xl hover:bg-[#ED9590] transition'>Get Premium !</button>
            </div>
        </section>
        </div>
    </main></>)
}

export default Plans