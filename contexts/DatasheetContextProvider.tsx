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

export const datasheetContext = createContext<sheetdatatype>({data:[{ A: "dice faces", B: "6", C: "Total" },
{ A: "choose 5", B: "5", C: "" },
{ A: "choose 3", B: "3", C: "" },
{ A: "choose 2", B: "2", C: "" }],setData:()=>{}})

const DataSheetContextProvider:FC = ({children})=>{
    const [data, setData] = useState([
        { A: "dice faces", B: "6", C: "Total" },
        { A: "choose 5", B: "5", C: "" },
        { A: "choose 3", B: "3", C: "" },
        { A: "choose 2", B: "2", C: "" }
      ]);
    return <datasheetContext.Provider children={children} value={{data,setData}} />
}

export default DataSheetContextProvider