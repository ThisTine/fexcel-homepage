import { Autocomplete, Modal, Popper, Portal } from "@mantine/core";
import { useId, useInputState } from "@mantine/hooks";
import {
  Dispatch,
  FC,
  Reducer,
  ReducerAction,
  SetStateAction,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import { CellProps } from "react-datasheet-grid";
import Select from "react-select";
import { datasheetContext } from "../../contexts/DatasheetContextProvider";
import getCellArray from "../../functions/getCellArray";
import praseFormula from "../../functions/praseFormula";
import formula from "../../json/exformula";
import { formulatype } from "../../json/formula";
import FormulaModal from "../modal/FormulaModal";
export const checkKeyword: (item: string) => boolean = (item) => {
  if (!item || item.length < 3) {
    return false;
  }
  for (const i in formula) {
    const keywords = formula[i].keywords;
    for (const j in keywords) {
      if (keywords[j].toLowerCase().includes(item.toLowerCase()) 
      // || item.toLowerCase().includes(keywords[j].toLowerCase())
      ) return true;
    }
  }
  return false;
};

const checkSearch: (item: { keywords: string[]; val: string }) => boolean = ({
  keywords,
  val,
}) => {
  for (const i in keywords) {
    if (keywords[i].toLowerCase().includes(val.toLowerCase())
    //  || val.toLowerCase().includes(keywords[i].toLowerCase())
     ) {
      return true;
    }
  }
  return false;
};



export type moduleactiontype = {
  type: "open" | "close";
  name?: string;
};
export type moduletype = { isopen: boolean; formuladata?: formulatype };
const reudcer: Reducer<moduletype, moduleactiontype> = (prev, act) => {
  if (act.type === "close" || !act.name) {
    return { isopen: false };
  }
  if (act.type === "open") {
    return {
      isopen: true,
      formuladata: formula.filter((item) => item.name === act.name)[0],
    };
  }
  return { isopen: false };
};

const init: moduletype = {
  isopen: false,
};

const ExampleInputCell = ({
  rowData,
  columnData: { label },
  focus,
  setRowData,
}: CellProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const {data} = useContext(datasheetContext)
  const selectedref = useRef<any>(null);
  const [module, dispatch] = useReducer(reudcer, init);
  const [val, setVal] = useInputState<string>(rowData[label] || "");
  const [isIncluded, setIsIncluded] = useState(false);
  const [options, setoptions] = useState<any[]>([]);
  
  useLayoutEffect(() => {
    setIsIncluded(checkKeyword(val));
    if (rowData[label] !== undefined) {
      let opts: any = [];
      formula.forEach((item) => {
        if (checkSearch({ keywords: item.keywords, val }))
          opts.push({ value: item.name, label: item.name });
      });
      if (val.length >= 3) {
        setoptions(opts);
      } else {
        setoptions([]);
      }
      rowData[label] = val;
      setRowData(rowData);
    }
  }, [val]);
  useEffect(() => {
    if (focus) {
      ref.current?.select();
    } else {
      ref.current?.blur();
    }
  }, [focus]);

  if ((isIncluded && focus) || module.isopen) {
    return (
      <>
        {" "}
        <FormulaModal
          modaldata={module}
          opened={module.isopen}
          setOpened={() => dispatch({ type: "close" })}
          setVal={setVal}
        ></FormulaModal>
        <Select
          styles={{
            container: (provided) => ({
              ...provided,
              flex: 1, // full width
              alignSelf: "stretch", // full height
            }),
            control: (provided) => ({
              ...provided,
              height: "100%",
              border: "none",
              boxShadow: "none",
              background: "none",
            }),
            indicatorSeparator: (provided) => ({
              ...provided,
              opacity: 0,
            }),
          }}
          menuPortalTarget={document.body}
          autoFocus={true}
          ref={selectedref}
          inputValue={val}
          menuIsOpen={checkKeyword(val)}
          onInputChange={setVal}
          onChange={(e) => {
            dispatch({ type: "open", name: e.value });
            setVal(e?.value);
          }}
          filterOption={() => true}
          options={options}
        />
      </>
    );
  } else {
    if(!focus){
      return <p className="pl-3">{praseFormula(val,getCellArray(val,data))}</p>
    }
    return (
      <input
        autoFocus={true}
        ref={ref}
        value={val}
        onChange={setVal}
        className="dsg-input w-full h-full"
      />
    );
  }

  //dsg-input-align-right
  // return <div onClick={(e)=>{e.stopPropagation()}}><input value={val} onChange={setVal} ref={ref} className="dsg-input w-full h-full" style={{pointerEvents:focus ? "auto" : "none"}} tabIndex={-1}/>
  // {focus && <div className="w-full z-50 absolute p-1" onClick={e=>e.stopPropagation()}>
  //   {formula.map(item=>{
  //       for(const i in item.keywords){
  //           if(val && val.length >= 3 && item.keywords[i].toLocaleLowerCase().includes(val.toLowerCase())){
  //               return <div key={item.name} onClick={(e)=>{e.stopPropagation()}} className="p-2 px-3 bg-white hover:bg-purple-200 transition-all flex justify-between items-center shadow-md"><p>Use <b>{item.name}</b></p> <img className="w-8 aspect-square" src="/logo.png"/> </div>
  //           }
  //       }
  //   })}
  // </div>}
  // </div>
};

export default ExampleInputCell;
