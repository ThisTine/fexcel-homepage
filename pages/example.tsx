
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
import ReactTypingEffect from "react-typing-effect";
import ExampleInputCell from "../Components/sheet/ExampleInputCell";
import InputCell, { checkKeyword } from "../Components/sheet/ExampleInputCell";
import { datasheetContext } from "../contexts/DatasheetContextProvider";
import formula from "../json/exformula";
type datatype = 'A'|'B'|'C'


function Example() {
  const [step,setstep]=useState(0)
  const {data,setData} = useContext(datasheetContext)
  const [fq,setfq] = useState(false)
  const [sq,setsq] = useState(false)
  const ref = useRef<DataSheetGridRef>(null)
  const columns: Partial<Column<Record<string, any>, any, any>>[] = [
    { ...keyColumn("A", textColumn), title: "A",minWidth:200 },
    {  title: "B",minWidth:200,component:ExampleInputCell,columnData:{label:"B"},keepFocus:true },
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
  const regex = /=AVERAGE\([A-Z][0-9](\,|\:)[A-Z][0-9]\)/
  data.forEach(item=>{
    let arr:datatype[] = ["A","B","C"]
    arr.forEach(it=>{
      let text = item[it];
      if(checkKeyword(text+"") && step === 0){
        setstep(1)
      }
      if(regex.test(text+"") && step === 1){
        setstep(2)
      }
      if(text.toLocaleUpperCase() === "=AVERAGE(A1:A4)"){
        setfq(true)
      }
      if(text.toLocaleUpperCase() === "=AVERAGE(A1,A3)"){
        setsq(true)
      }
    }
    )
  })
}

useEffect(()=>{
  if(ref.current){
    ref.current?.setActiveCell({col:1,row:0})
  }
},[])
  return (
    <main className="min-h-screen mt-28 flex items-center w-full flex-col">
      <Head>
        <title>Example - Fexcel</title>
        </Head>
      <div className="container sm:w-full">
        <div className=" w-fit flex flex-col items-center">
          <h1 data-aos="fade-down" className="text-3xl bg-[#FDE384] w-fit p-3 px-10 rounded-lg mb-3 text-left">Do you know how to find <b> an average </b> of data in excel ?</h1>
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
        {step === 1 && <h2 data-aos="fade" className="text-lg justify-self-start mr-auto bg-[#E2E6F9] p-3 px-5 rounded-lg mb-7">Click on <b>Mean</b> and <b>select</b> what you want to combine</h2>}
        {step === 2 && <div data-aos="fade" className="flex justify-start w-full flex-col">
          <h2 className="text-lg justify-self-start bg-[#FEA8BD] p-3 px-5 rounded-lg mb-2 w-fit">All Done !</h2>
          <div >
            <h2 className="text-lg font-bold">Now try this</h2>
            <p className={fq? "text-green-600" : "text-red-600"} >A) Find the average of <b> A1 to A4 </b> {fq ?"✔️" : "❌"} </p>
            <p className={sq? "text-green-600" : "text-red-600"}  >B) Find the average of <b> A1 and A3 </b> {sq ? "✔️" : "❌"} </p>
          </div>
          </div>}
        </div>
        <div className=" sm:p-2 lg:p-10 w-full bg-white shadow-lg rounded-lg">
           <DataSheetGrid
           ref={ref}
            value={data}
            lockRows={true} 
            //@ts-ignore
            onChange={changedata}
            columns={columns}
          />
        </div>
        {(step===2 && fq && sq ) && <div data-aos="fade-up" className="flex w-full justify-end"> <Link href="/demo"><button onClick={savetostorage}  className="animate-bounce text-lg text-white mt-5 transition-all hover:shadow-xl focus:ring-4 justify-self-start bg-[#9a42ff] hover:bg-[#6d28bd] p-3 px-5 rounded-lg mb-7 ml-3 shadow-md">Try more functions !</button></Link> </div>}
      </div>
    </main>
  );
}

export default Example;
