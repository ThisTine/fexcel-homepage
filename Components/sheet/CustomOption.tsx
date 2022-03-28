import { FC } from "react"
import { OptionProps } from "react-select"

const CustomOption:FC<OptionProps> = ({ innerRef, innerProps,data  }) => {
    return(<div ref={innerRef} {...innerProps} className="p-3 px-1 flex justify-between items-center hover:bg-purple-200 cursor-pointer  transition-all" >
      <h1>{
        //@ts-ignore
      data.label
      }</h1>
      <img src="/logo.png" className="lg:w-8 w-5 aspect-square" />
      </div>)}

export default CustomOption