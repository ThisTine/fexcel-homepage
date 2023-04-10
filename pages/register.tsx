import { NextPage } from "next"
import Head from "next/head"
import ETCModal from "../Components/modal/ETCModal"
import PlanCard from "../Components/PlanCard"
import { useModel } from "../hooks/useModel"
import { useState } from "react"
import Link from "next/link"
import { Checkbox } from "@mantine/core"

const Register:NextPage = ()=>{
    const [text, setText] = useState<string>("");
    const [isOpen,onOpen,onClose] = useModel()
    return(
    <>
    <Head>
    <title>Register - Fexcel</title>

    </Head>
    <ETCModal isOpen={isOpen} onClose={onClose} ></ETCModal>
    <main className="min-h-screen bg-[#E2E6F9] p-20 border-4 border-solid border-[#7774C3]">
        <div className="w-full h-20"></div>
        <div className="container mx-auto mt-10 flex flex-col" >
            
        <h1 className="text-8xl text-center font-Dongle "  >Email Sign-up</h1>
        <h2 className='text-3xl text-center font-semibold'  >ลงทะเบียนอีเมลเพื่อใช้บริการและรับข่าวสารสำคัญจากเรา</h2>
        <div className="w-full h-[2px] bg-black gap-20 mt-10 mb-10" ></div>
        <h2 className='text-3xl text-left font-semibold mb-5'  >โปรดกรอกข้อมูลด้านล่างให้ครบถ้วน</h2>
        <h3 className="text-5xl text-left font-Dongle mt-2"  >Username: </h3>
        <input
            placeholder="exampleuser"
            className="rounded-3xl appearance-none text-2xl border w-full py-4 lg:py-5 bg-[#CECECE] px-6 text-[#606060] leading-tight transition-all ring-purple-400 focus:outline-none focus:ring-offset focus:ring-4 " 
            onChange={(e) => setText(e.target.value)}
        />
        <h3 className="text-5xl text-left font-Dongle mt-2"  >Email: </h3>
        <input
            placeholder="example@fexcel.com"
            className="rounded-3xl appearance-none text-2xl border w-full py-4 lg:py-5 bg-[#CECECE] px-6 text-[#606060] leading-tight transition-all ring-purple-400 focus:outline-none focus:ring-offset focus:ring-4 " 
            onChange={(e) => setText(e.target.value)}
        />
        <h3 className="text-5xl text-left font-Dongle mt-2"  >Password: </h3>
        <input
            placeholder="Must contain at least 8 characters"
            className="rounded-3xl appearance-none text-2xl border w-full py-4 lg:py-5 bg-[#CECECE] px-6 text-[#606060] leading-tight transition-all ring-purple-400 focus:outline-none focus:ring-offset focus:ring-4 " 
            onChange={(e) => setText(e.target.value)}
        />
        <h3 className="text-5xl text-left font-Dongle mt-2"  >Password Confirmation: </h3>
        <input
            placeholder="Must contain at least 8 characters"
            className="rounded-3xl appearance-none text-2xl border w-full py-4 lg:py-5 bg-[#CECECE] px-6 text-[#606060] leading-tight transition-all ring-purple-400 focus:outline-none focus:ring-offset focus:ring-4 " 
            onChange={(e) => setText(e.target.value)}
        />
        <div className="flex flex-col gap-3 mt-5 text-[#006ED3]" >
            <Link href="/register"><a className="hover:underline">ข้อกำหนดการให้บริการ</a></Link>
            <Link href="/register"><a className="hover:underline">นโยบายความเป็นส่วนตัว</a></Link>
        </div>
        <div className="flex mt-5 gap-4" >
          <div className="flex flex-col mt-1" >
            <Checkbox></Checkbox>
            </div>
          <div className="flex flex-col" >
            <h2 className="text-lg font-bold">ยอมรับข้อกำหนดการให้บริการและนโยบายความเป็นส่วนตัว</h2>
            </div>
        </div>
        <section className='flex justify-center my-10'>
        <Link href="/verification"><a className='px-10 py-5 bg-[#94B1E1] hover:bg-[#7CA1DE] transition text-3xl rounded-full text-[#FFFFFF]' >Register</a></Link> 
        </section>       
        </div>
        <h4 className="text-4xl text-left font-Dongle "  >or</h4>
        <section className='flex justify-left my-2'>
            <Link href="/verification">
            <div className='px-8 py-5 bg-[#FFFFFF] hover:bg-[#7CA1DE] transition text-3xl rounded-2xl text-[#4C00B0] flex' >Sign-in with Google   
            <img src="/google.png" className="px-2 h-9 flex"/>
            </div></Link> 
        </section> 
    </main></>)
}

export default Register