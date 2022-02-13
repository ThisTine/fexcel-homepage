import { FC } from "react";

type plantype = {
    name : string,
    description: string,
    lists: string[],
    price: number,
    aos?: any
}

const PlanCard:FC<plantype> = ({name,description,lists,price,aos})=>{
    return(
        <div {...aos} className="p-10 flex flex-col flex-1 gap-3 justify-between bg-[#F0EBF4] rounded-3xl shadow-lg pt-5" >
                    <h3 className="text-center text-4xl font-bold mb-5" >{name}</h3>
                    <h4 className="mb-3 text-xl ">{description}</h4>
                    <div className="w-full h-[2px] bg-black" ></div>
                    <div>
                    {lists.map((item,idx)=><p className="text-lg" key={idx}>- {item}</p>)}
                    </div>
                    
                    <div className="self-end items mt-10" >
                        <h5 className="text-3xl font-bold font-Righteous">{price} Baht<span className="text-xl" >/month</span></h5>
                    </div>
                </div>
    )
}

export default PlanCard