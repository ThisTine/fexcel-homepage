import { useState } from "react"

export const useModel: (defaultValue?:boolean)=>[boolean,()=>void,()=>void] = (defaultValue)=>{
    const [isOpen ,setisopen] = useState(defaultValue??false)
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

