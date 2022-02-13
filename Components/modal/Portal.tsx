import { AnimatePresence } from "framer-motion";
import { FC } from "react";
import ReactDOM from "react-dom";

const Portal:FC = ({children})=>{
    if(typeof window === 'object'){
    return ReactDOM.createPortal(
            children
    , document.body )}
    return null
}

export default Portal