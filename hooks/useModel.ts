import { useState } from "react"

export const useModel: ()=>[boolean,()=>void,()=>void] = ()=>{
    const [isOpen ,setisopen] = useState(false)
    const onClose = ()=>{setisopen(false)
        if(typeof window === 'object'){
            document.body.classList.remove("disablescroll")
        }
    }
    const onOpen = ()=>{setisopen(true)
        if(typeof window === 'object'){
            document.body.classList.add("disablescroll")
        }}
    return [isOpen,onOpen,onClose]
}

