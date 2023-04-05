import Link from "next/link"
import { FC } from "react"

const Footer:FC = ()=>{
    return(
        <footer className='bg-black h-52 flex flex-col justify-end pb-3 '>
        <div className="text-white flex container mx-auto mb-5 gap-10" >
          <div className="flex  flex-col gap-3" >
            <h2 className="text-lg font-bold">Fexcel</h2>
            <Link href="/"><a className="hover:underline">Home</a></Link>
            <Link href="/plans"><a className="hover:underline">Pricing</a></Link>
            <Link href="/register"><a className="hover:underline">Register</a></Link>
          </div>
          <div className="flex flex-col gap-3" >
            <h2 className="text-lg font-bold">Contact us</h2>
           <a href="mailto:fexcel@thistine.com" className="hover:underline">Email: Fexcel@thistine.com</a>
          </div>
        </div>
        <div className='container mx-auto'>
          <p className='text-white '>© 2022. All rights reserved.</p>
        </div>
      </footer>
    )
}

export default Footer