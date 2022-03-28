
import Head from "next/head";
import Link from "next/link";
import React, { useContext, useRef, useState } from "react";
import {
  DataSheetGrid,
  textColumn,
  keyColumn,
  Column,
  DataSheetGridRef,
} from "react-datasheet-grid";
import "react-datasheet-grid/dist/style.css";
import ReactTypingEffect from "react-typing-effect";
import InputCell, { checkKeyword } from "../Components/sheet/ExampleInputCell";
import { datasheetContext } from "../contexts/DatasheetContextProvider";
import formula from "../json/formula";
type datatype = 'A'|'B'|'C'


function Example() {
  const [step,setstep]=useState(0)
  const {data,setData} = useContext(datasheetContext)
  const columns: Partial<Column<Record<string, any>, any, any>>[] = [
    { ...keyColumn("A", textColumn), title: "A", disabled: true,minWidth:200 },
    { ...keyColumn("B", textColumn), title: "B",minWidth:200 },
    { title: "C",component: InputCell,columnData:{label:"C"},keepFocus:true,minWidth:200},
  ];
  const savetostorage = ()=>{
    localStorage.setItem("demo","true")
  }
  const changedata = (data:{
    A: string;
    B: string;
    C: string;
}[])=>{
  setData(data)
  const regex = /=COMBIN\([A-Z][0-9]\,[A-Z][0-9]\)/
  data.forEach(item=>{
    let arr:datatype[] = ["A","B","C"]
    arr.forEach(it=>{
      let text = item[it];
      if(checkKeyword(text+"") && step === 0){
        setstep(1)
      }
      console.log((text+"").match(regex))
      if(regex.test(text+"") && step === 1){
        
        setstep(2)
      }
    })
  })
}
  return (
    <main className="min-h-screen mt-28 flex items-center w-full flex-col">
      <Head>
        <title>Example - Fexcel</title>
        </Head>
      <div className="container sm:w-full">
        <div className=" w-fit flex flex-col items-center">
          <h1 data-aos="fade-down" className="text-3xl  text-center bg-[#FDE384] w-fit p-3 px-10 rounded-lg mb-3">Do you know how to use <b> a combination rule </b> from excel ?</h1>
          {step === 0 &&<h2 data-aos="fade" data-aos-delay="100" className="text-lg justify-self-start mr-auto bg-[#E2E6F9] p-3 px-5 rounded-lg mb-7">Try typing <b>“<ReactTypingEffect
        text={formula[0].keywords}
        speed={50}
        eraseSpeed={50}
        eraseDelay={1000}
        typingDelay={1000}
        displayTextRenderer={(text, i) => {
          return (
            <>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                  >{char}</span>
                );
              })}
            </>
          );
        }}        
      />”</b></h2>}
        {step === 1 && <h2 data-aos="fade" className="text-lg justify-self-start mr-auto bg-[#E2E6F9] p-3 px-5 rounded-lg mb-7">Click on <b>Combination rule</b> and <b>select</b> what you want to combine</h2>}
        {step === 2 && <div data-aos="fade" className="flex justify-start  w-full">
          <h2 className="text-lg justify-self-start bg-[#FEA8BD] p-3 px-5 rounded-lg mb-7">All Done !</h2>
          </div>}
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
        {step===2 && <div data-aos="fade-up" className="flex w-full justify-end"> <Link href="/demo"><button onClick={savetostorage}  className="text-lg text-white mt-5 transition-all hover:shadow-xl focus:ring-4 justify-self-start bg-[#9a42ff] hover:bg-[#6d28bd] p-3 px-5 rounded-lg mb-7 ml-3 shadow-md">I understand how fexcel work !</button></Link> </div>}
      </div>
    </main>
  );
}

export default Example;
