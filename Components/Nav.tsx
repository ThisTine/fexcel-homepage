import Link from "next/link";
import { FC } from "react";
const NavBar:FC = ()=>{
    return(
        <header className="fixed w-full top-0 bg-white h-15 lg:h-20 flex items-center shadow-md z-[100]">
            <nav className="w-11/12 mx-auto flex justify-between items-center" >
                <Link href="/">
                <a className="flex gap-3 w-fit items-center" >
                    <img src={"/logo.png"} className="h-12" />
                    <h1 className="text-2xl lg:text-3xl text-[#657CBC] font-bold" >Fexcel</h1>
                </a></Link>
                {/* <Link href="/demo">
                <a className="flex h-fit p-2 items-center text-md lg:text-xl bg-purple-400 text-white px-5 lg:px-10 rounded-full hover:bg-purple-500 transition">
                    Try demo !
                </a></Link> */}
            </nav>
        </header>
    )
}

export default NavBar