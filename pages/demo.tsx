import { useBooleanToggle } from "@mantine/hooks";
import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import ReactTypingEffect from "react-typing-effect";
import {useModel} from "../hooks/useModel";
import {DemoModal} from "../Components/modal/DemoModal";

const Demo = () => {
  const [text, setText] = useState<string>("");
  const [result, setResult] = useState("Try asking for Average of cell A1 to A10");
  const [isLoading, toggle] = useBooleanToggle(false);
  const [isRerender,setIsRerender] = useBooleanToggle(true)
  const [isOpen,_, OnClose] = useModel(true)
  const sendApi = () => {
    toggle(true);
    axios
      .post("https://api.fexcel.services/api/demo", {
        prompt: text,
      })
      .then((data) => {
        setIsRerender(false)
        setResult(data.data.Result);
      })
      .catch(() => {})
      .finally(() => toggle(false));
  };
  useEffect(()=>{
    if(!isRerender)
    setIsRerender(true)
  },[isRerender])
  return (
    <main className="min-h-screen flex items-center justify-center w-full bg-purple-50 flex-col">
      <Head>
        <title>Demo - Fexcel</title>
      </Head>
      {typeof window !== undefined && <DemoModal isOpen={isOpen} onClose={OnClose}/>}

      <div className="flex gap-10  lg:mt-20 flex-col h-screen w-full lg:flex-row">

        <div className="w-fit justify-self-end pt-14 lg:pt-0 lg:flex-1 flex flex-col justify-center items-end mb-5">
          <div className="container max-w-3xl py-24 lg:py-20">
            <h1 className="text-xl lg:text-3xl text-slate-600 text-right" data-aos="fade-down">
              We can help you with your <b><u className="uppercase" >formula</u></b>
            </h1>
            <h2 className="text-5xl lg:text-7xl text-[#657CBC] text-right text-transparent  bg-clip-text bg-gradient-to-br to-purple-800 from-[#657CBC]">
             {isRerender && <ReactTypingEffect
             text={result}
             speed={100}
             eraseDelay={999999999}
             typingDelay={1000}
             />}
             
            </h2>
          </div>
        </div>

        <div className="flex flex-1 w-full  items-start lg:items-center lg:bg-transparent  justify-center lg:justify-start">
          <form onSubmit={(e)=>{e.preventDefault();sendApi()}}  data-aos="fade-down" data-aos-delay="500" className="w-full  h-full lg:h-fit flex  rounded-t-2xl flex-col gap-5 lg:shadow-md lg:rounded-xl max-w-xl pt-14 py-10  px-10 bg-white ">
            <p className="text-2xl lg:text-3xl text-neutral-600 font-bold lg:pb-5 ">
              Formula translator
            </p>
            <input
              placeholder="Average of cell A1 to A10 "
              className="rounded-xl appearance-none text-xl border w-full py-4 lg:py-7 bg-slate-50 px-3 text-gray-700 leading-tight transition-all ring-purple-400 focus:outline-none focus:ring-offset focus:ring-4 "
              onChange={(e) => setText(e.target.value)}
            />
            <div className="flex justify-start  lg:mt-10">
            <button
              disabled={isLoading}
              type="submit"
              className="px-5 lg:px-10 py-4 lg:py-5  w-full bg-purple-400 hover:bg-purple-600 disabled:bg-purple-100 text-white transition text-xl lg:text-2xl font-bold rounded-full"
            >
              {isLoading ? "we are getting your answer...." : "Turn to excel formula"}
            </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Demo;
