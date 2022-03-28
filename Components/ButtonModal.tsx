import { Modal } from "@mantine/core";
import randomColor from "randomcolor";
import { FC, useState } from "react";
import { formulatype } from "../json/formula";

const ButtonModal:FC<{item:formulatype}> = ({item})=>{
    const [opened, setOpened] = useState(false);
    return <>
    <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={item.name}
        zIndex={9999}
      >
        <div>
            <h2 className="text-lg" >Here are some keywords for you</h2>
            <div className="flex justify-start gap-3 flex-wrap mt-5">
            {item.keywords.map(item=><p key={item} style={{backgroundColor:randomColor({luminosity:"light"})}} className={`p-2 px-4 rounded-full`}>{item}</p>)}
            </div>
        </div>
      </Modal>
     <button onClick={()=>setOpened(true)} className={`bg-purple-200 p-3 px-5 rounded-2xl shadow-md hover:shadow-lg focus:ring-4 hover:bg-purple-500 hover:text-white transition-all`}>{item.name}</button> </>
}

export default ButtonModal