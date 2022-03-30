import { Button, Modal } from "@mantine/core";
import Head from "next/head";
import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import {
  DataSheetGrid,
  textColumn,
  keyColumn,
  Column,
  DataSheetGridRef,
} from "react-datasheet-grid";
import "react-datasheet-grid/dist/style.css";
import ButtonModal from "../Components/ButtonModal";
import InputCell from "../Components/sheet/InputCell";
import { datasheetContext } from "../contexts/DatasheetContextProvider";
import formula from "../json/formula";


function Demo() {
  const {data,setData} = useContext(datasheetContext)
  const [opened, setOpened] = useState(false);
  const [wel,setwel] = useState(true)
  
  const columns: Partial<Column<Record<string, any>, any, any>>[] = [
    { title: "A",minWidth:200,component:InputCell,columnData:{label:"A"},keepFocus:true  },
    { title: "B",minWidth:200,component:InputCell,columnData:{label:"B"},keepFocus:true },
    { title: "C",component: InputCell,columnData:{label:"C"},keepFocus:true,minWidth:200},
  ];
  const changedata = (data:{
    A: string;
    B: string;
    C: string;
}[])=>{
  setData(data)
}


  return (
    <main className="min-h-screen mt-28 flex items-center w-full flex-col">
        <Head>
        <title>Demo - Fexcel</title>
        </Head>
        <Modal
        withCloseButton={false}
        opened={wel}
        onClose={() => setwel(false)}
      >
          <h1 className="text-xl font-bold">บอกเราหน่อยว่าคุณรู้สึกอย่างไรกับบริการของ Fexcel ?</h1>
          <div className="gap-6 flex flex-col min-h-[200px] justify-center items-center">
          
          <a rel="noreferrer" className="p-5 text-lg px-8 w-fit rounded-lg hover:bg-purple-800 transition-all focus:ring-4 bg-purple-600 text-white" href="https://forms.gle/ggnnmc5mcCGkaYk57" target={"_blank"} >Google Form</a>
          </div>
      </Modal>
      <div className="container sm:w-full">
        <div className=" w-full flex flex-col items-start">
          <h1 className="text-3xl  text-left bg-[#FDE384] w-fit p-3 px-10 rounded-lg mb-3" data-aos="fade-down" >Now try it with these formula</h1>
          <div className="flex gap-3 justify-start w-full my-2 overflow-auto py-3">
              {formula.map((item,idx)=><ButtonModal key={item.name} idx={idx} item={item}/>)}
              
          </div>
         
        </div>
        <div className=" sm:p-2 lg:p-10 w-full bg-white shadow-lg rounded-lg">
           <DataSheetGrid
            value={data}
            lockRows={true}
            //@ts-ignore
            onChange={changedata}
            columns={columns}
          />
        </div>
        <div className="mt-5" data-aos="fade-up" data-aos-delay="200">
            <a rel="noreferrer" href="https://forms.gle/ggnnmc5mcCGkaYk57" target={"_blank"} className="p-3 px-6 bg-lime-400 rounded-xl hover:bg-lime-500 hover:shadow-lg transition-all text-white" >FeedBack !</a>
        </div>
      </div>
    </main>
  );
}

export default Demo;
