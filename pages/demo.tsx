import Head from "next/head";
import Link from "next/link";
import React, { useContext, useRef, useState } from "react";
import {
  DataSheetGrid,
  textColumn,
  keyColumn,
  Column,
} from "react-datasheet-grid";
import "react-datasheet-grid/dist/style.css";
import ButtonModal from "../Components/ButtonModal";
import InputCell from "../Components/sheet/InputCell";
import { datasheetContext } from "../contexts/DatasheetContextProvider";
import formula from "../json/formula";


function Demo() {
  const {data,setData} = useContext(datasheetContext)
  const columns: Partial<Column<Record<string, any>, any, any>>[] = [
    { ...keyColumn("A", textColumn), title: "A",minWidth:200 },
    { ...keyColumn("B", textColumn), title: "B",minWidth:200 },
    { title: "C",component: InputCell,columnData:{label:"C"},keepFocus:true,minWidth:200},
  ];
  const changedata = (data:{
    A: string;
    B: string;
    C: string;
}[])=>{
  setData(data)
}

const handleonclick = ()=>{
    localStorage.removeItem("demo")
}

  return (
    <main className="min-h-screen mt-28 flex items-center w-full flex-col">
        <Head>
        <title>Demo - Fexcel</title>
        </Head>
      <div className="container sm:w-full">
        <div className=" w-full flex flex-col items-start">
          <h1 className="text-3xl  text-left bg-[#FDE384] w-fit p-3 px-10 rounded-lg mb-3" data-aos="fade-down" >Now try it with these formula</h1>
          <div className="flex gap-3 justify-start w-full my-5 overflow-auto">
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
            <Link href="/example"><button onClick={handleonclick} className="p-3 px-6 bg-red-300 rounded-xl hover:bg-red-400 hover:shadow-lg transition-all text-white" >Go Back to Example</button></Link>
        </div>
      </div>
    </main>
  );
}

export default Demo;
