import React, { FC, useEffect, useState } from 'react'
import { mode } from '../../json/formula'

const ModeOptions:FC<{defaultValue?:mode,onChange:(e:mode)=>void,isDisable:boolean}> =({defaultValue,isDisable,onChange})=> {
    const [value,setValue] = useState(defaultValue || "and")
    useEffect(()=>{
        onChange(value)
    },[value])

  return (
    <div className="flex gap-3 my-4 " >
        <button onClick={()=>setValue("and")} disabled={isDisable} className={`p-4 px-5 ${value === "and" ? "bg-purple-400 disabled:bg-purple-100 " : "bg-slate-400 disabled:bg-slate-100"} disabled:cursor-not-allowed transition-all rounded-lg flex-1 text-left text-white`} >and</button>
        <button onClick={()=>setValue("to")} disabled={isDisable} className={`p-4 px-5 ${value === "to" ? "bg-purple-400 disabled:bg-purple-100" : "bg-slate-400 disabled:bg-slate-100"} disabled:cursor-not-allowed transition-all rounded-lg flex-1 text-left text-white`} >to</button>
    </div>
  )
}


export default ModeOptions