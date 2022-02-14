import { AnimatePresence, motion } from "framer-motion";
import { FC, FormEventHandler, FormHTMLAttributes, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import BlackDrop from "./BlackDrop";
import Portal from "./Portal";

const ETCModal: FC<{
  isOpen: boolean;
  onClose: () => void;
  disableBGClose?: boolean;
}> = ({ isOpen, onClose, children, disableBGClose }) => {
  const [email, setemail] = useState("");
  const [isloading,setisloading] = useState(false)
  const submit:FormEventHandler<HTMLFormElement> =  async (e) => {
      e.preventDefault()
    try{
        setisloading(true)
        const data = await fetch("/api/interestsignup",{ body:JSON.stringify({email}),method:"POST",headers:{"Content-Type":"application/json"}  } )
       const {success} = await data.json()
       if(success){
           console.log(success)
           toast.success("Success !")
           setemail("")
           onClose()
       }
       setisloading(false)
    }catch(err){
        toast.error("Error")
        setemail("")
        setisloading(false)
        onClose()

    }
  };
  return (
    <Portal>

        <ToastContainer/>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {isOpen && (
          <BlackDrop
            onClose={disableBGClose ? () => {} : onClose}
            position="center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: -2, scale: 0.2 }}
              className="mt-14 max-w-3xl w-full
             bg-[#E4F7E1] p-10 border-4 border-solid border-[#FFC700] z-[9999]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pb-5 flex flex-col gap-10 justify-center items-center ">
                <h1 className="font-bold text-4xl text-black text-center">
                  ขอบคุณที่เลือกใช้บริการของเรา!
                </h1>
                <h2 className="text-lg text-center">
                  อย่างไรก็ตาม ในขณะนี้ผลิตภัณฑ์ของเรายังอยู่ใน
                  <span className="bg-[#FF8484] text-white">ช่วงการทดสอบ</span> <br/>
                  คุณสามารถ ทิ้ง email
                  ไว้ด้านล่างเพื่อติดตามข่าวสารเพิ่มเติมเกี่ยวกับ Fexcel <br/>
                  เเละเราจะเเจ้งให้คุณทราบเป็นคนเเรก ๆ เมื่อเราพร้อม
                </h2>
                {/* <button className="p-2" onClick={onClose} > <AiOutlineClose/> </button> */}
              </div>
              <form onSubmit={submit} className="w-full" >
                <h1 className="text-2xl font-bold">Sign Up Here :</h1>
                <div className="flex lg:flex-row flex-col my-5 text-xl items-start lg:items-center">
                  <p className="mr-5">Email: </p>
                  <input
                    required={true}
                    type={"email"}
                    value={email}
                    onChange={e=>setemail(e.target.value)}
                    
                    className="w-full h-12 rounded-full p-5"
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={!email || isloading}
                    // onClick={submit}
                    className={`${isloading ? "hover:bg-[#f8becd]" : "hover:bg-[#f792ab]"} ${isloading ? "bg-[#f8becd]" : "bg-[#FEA8BD]"} transition hover:shadow-lg p-3 rounded-full px-12 flex `}
                  >
                      {isloading && <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>}
                    Submit
                  </button>
                </div>
                {children}
              </form>
            </motion.div>
          </BlackDrop>
        )}
      </AnimatePresence>
    </Portal>
  );
};

export default ETCModal;
