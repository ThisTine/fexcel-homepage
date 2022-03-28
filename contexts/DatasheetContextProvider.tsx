import { createContext, Dispatch, FC, SetStateAction, useState } from "react";

type sheetdatatype = {
    data: {
        A: string;
        B: string;
        C: string;
    }[],
    setData: Dispatch<SetStateAction<{
        A: string;
        B: string;
        C: string;
    }[]>>
}

const inti = [{ A: "5", B: "Type here...", C: "" },
{ A: "6", B: "", C: "" },
{ A: "7", B: "", C: "" },
{ A: "8", B: "", C: "" }]

export const datasheetContext = createContext<sheetdatatype>({data:inti,setData:()=>{}})

const DataSheetContextProvider:FC = ({children})=>{
    const [data, setData] = useState(inti);
    return <datasheetContext.Provider children={children} value={{data,setData}} />
}

export default DataSheetContextProvider