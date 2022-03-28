import { Modal } from "@mantine/core";
import randomColor from "randomcolor";
import { FC, useState } from "react";
import { formulatype } from "../json/formula";

const colors = ["FDC5F6","F6AEF8","B288EA","C29FEF","CDB3F2","C3B3F2","B3B9F2","B3D4F2"]

const ButtonModal:FC<{item:formulatype,idx:number}> = ({item,idx})=>{
    const [opened, setOpened] = useState(false);
    return <>
    <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={item.name}
        zIndex={9999}
      >
        <div >
            <h2 className="text-lg" >Here are some keywords for you</h2>
            <div className="flex justify-start gap-3 flex-wrap mt-5">
            {item.keywords.map((item,ind)=><p key={item} style={{backgroundColor:"#"+colors[ind]}} className={`p-2 px-4 rounded-full`}>{item}</p>)}
            </div>
        </div>
      </Modal>
     <button data-aos="zoom-in" data-aos-delay={idx*100+100} onClick={()=>setOpened(true)} className={`bg-purple-200 p-1 px-3 lg:p-3 lg:px-5 rounded-2xl shadow-md hover:shadow-lg focus:ring-4 hover:bg-purple-500 hover:text-white transition-all`}>{item.name}</button> </>
}

export default ButtonModal