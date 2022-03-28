import Link from "next/link";
import { FC } from "react";
const NavBar:FC = ()=>{
    return(
        <header className="fixed w-full top-0 bg-white h-20 flex items-center shadow-md z-[100]">
            <nav className="w-11/12 mx-auto flex justify-between" >
                <Link href="/">
                <a className="flex gap-3 w-fit items-center" >
                    <img src={"/logo.png"} className="h-12" />
                    <h1 className="text-3xl text-[#657CBC] font-bold" >Fexcel</h1>
                </a></Link>
                <Link href="/plans">
                <a className="flex gap-3 w-fit items-center bg-purple-400 text-white px-10 rounded-full hover:bg-purple-500 transition">
                    <h1 className="text-xl" >Plans</h1>
                </a></Link>
            </nav>
        </header>
    )
}

export default NavBar