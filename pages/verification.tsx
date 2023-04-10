import { NextPage } from "next"
import Head from "next/head"
import ETCModal from "../Components/modal/ETCModal"
import PlanCard from "../Components/PlanCard"
import { useModel } from "../hooks/useModel"
import Link from "next/link"

const Verification:NextPage = ()=>{
    const [isOpen,onOpen,onClose] = useModel()
    return(
    <>
    <Head>
    <title>Verification - Fexcel</title>

    </Head>
    <ETCModal isOpen={isOpen} onClose={onClose} ></ETCModal>
    <main className="min-h-screen bg-[#E2E6F9] p-4 border-4 border-solid border-[#7774C3]">
        <div className="w-full h-20"></div>
        <div className="container mx-auto flex flex-col" >

        <div className="flex justify-center mr-20"> <img src="/verify.png" className="w-1/4 transition flex" /> </div>
        <h1 className="text-8xl text-center font-Dongle font-bold mb-2" >Verify Your Email</h1>
        
        <section className="flex flex-col justify-center mb-20">
        <h1 className="text-3xl text-center font-semibold"> ทางเราได้ส่งอีเมลไปยัง “example@fexcel.com” เป็นที่เรียบร้อย </h1>
        <h1 className="text-3xl text-center font-semibold"> โปรดตรวจสอบอีเมลของคุณเพื่อเปิดใช้งานบัญชีที่ต้องการเชื่อมต่อกับบริการ Fexcel </h1>
        <h1 className="text-3xl text-center font-semibold"> ลิงก์ในอีเมลจะหมดอายุภายใน 24 ชั่วโมง </h1>
        </section>

        <h2 className='text-4xl text-center font-semibold'>หากคุณไม่ได้รับข้อความในอีเมล</h2>
        <section className="flex justify-center mt-3">
        <Link href="/verification"><a className='px-14 py-8 bg-[#94B1E1] hover:bg-[#7CA1DE] transition text-4xl rounded-3xl text-[#FFFFFF]' >Resend Verification Email</a></Link>
        </section>
        
        <h3 className="text-3xl text-center font-semibold mt-10" > หากท่านยังพบปัญหาอาจเพราะอีเมลของท่านไม่ถูกต้อง </h3>
        <section className="flex justify-center mb-20">
        <h3 className="text-3xl text-center font-semibold flex" > โปรดลงทะเบียน Fexcel ด้วย</h3>
        <Link href="/register"><a className="hover:underline text-3xl text-center font-semibold text-[#006ED3] flex">อีเมลอื่น</a></Link>
        </section>
        </div>
    </main></>)
}

export default Verification