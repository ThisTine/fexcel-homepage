import { Modal } from "@mantine/core";
import { Select } from '@mantine/core';
import { ChangeEvent, FC, useContext, useEffect, useLayoutEffect, useState } from "react";
import { mode } from "../../json/formula";
import { moduletype } from "../sheet/InputCell";
import { v4 as uuidv4 } from "uuid";
import ModeOptions from "../sheet/ModeOptions";
import { datasheetContext } from "../../contexts/DatasheetContextProvider";

type celldata = { id: string; value: string }
type opttype = {value:string,label:string}
type arr = "A" | "B" | "C"

const FormulaModal: FC<{
    opened: boolean;
    isexample:boolean;
    setOpened: () => void;
    modaldata: moduletype;
    setVal: (value: string | ChangeEvent<any> | null | undefined) => void
}> = ({ opened, setOpened, modaldata, setVal,isexample }) => {
    const {data} = useContext(datasheetContext)
    const [cells, setcells] = useState<celldata[]>([]);
    const [cmode, setcmode] = useState<mode>(
        modaldata.formuladata?.mode || "and"
    );
    const [options,setoptions] = useState<opttype[]>([])
    useEffect(()=>{
        let dts:opttype[] = []
        data.forEach((item,idx)=>{
            let arr:arr[] = ["A","B","C"]
            arr.forEach(it=>{
                let form = {value:`${it}${idx+1}`,label: cmode === "to" ? `${it}${idx+1}` : `${it}${idx+1} (${item[it]})`}
                if(!(it === "C" && isexample))
                if(!(cmode === "and" && (isNaN(parseInt(item[it]))) ))
                dts.push(form)
            })
        })
        setoptions(dts)
    },[cmode])

    useLayoutEffect(() => {
        if (modaldata.formuladata) {
            const { min, max } = modaldata.formuladata;
            let tempcell: celldata[] = [];
            for (let i = 0; i < min; i++) {
                tempcell = [...tempcell, { id: uuidv4(), value: "" }];
            }
            setcells(tempcell);
        }
    }, [modaldata.formuladata]);

    const addinp = () => {
        setcells([...cells, { id: uuidv4(), value: "" }]);
    };
    const deleteinp = (id: string) => {
        setcells(cells.filter((item) => item.id !== id));
    };
    const onChangeHandle = (id: string, value: string) => {
        setcells(
            cells.map((item) => {
                if (item.id === id) return { ...item, value };
                return item;
            })
        );
    };
    const viewValue = (id: string) => {
        for (const i in cells) {
            if (cells[i].id === id) return cells[i].value;
        }
        return "";
    };
    const validate = () => {
        for (const i in cells) {
            if (!cells[i].value) return false
        }
        if (!cmode) return false
        return true
    }
    return (
        <Modal
            zIndex={999}
            opened={opened}
            onClose={() => setOpened()}
            title={modaldata?.formuladata?.name}
        >
            <h1 className="my-5 p-3 bg-slate-500 rounded-2xl text-2xl w-fit text-white">
                {modaldata.formuladata?.formula}({cells.map(item => item.value).toString().replaceAll(",", (cmode === "and" ? "," : ":"))}){" "}
            </h1>
            
            <h2 className="text-lg" >Mode</h2>
            <ModeOptions defaultValue={cmode} isDisable={(modaldata.formuladata?.mode !== undefined)} onChange={(e)=>setcmode(e)} />

            <h2 className="text-xl font-bold">Which Cell ?</h2>
            <div className="grid grid-cols-2 gap-3 w-full flex-wrap">
                {cells.map((item) => (
                    <div key={item.id} className="relative w-full">
                        {cells.length > (modaldata.formuladata?.min || 0) && (
                            <button
                                onClick={() => deleteinp(item.id)}
                                className="absolute top-[-8px] right-[-5px] w-5 h-5 text-sm flex justify-center items-center text-white  p-1 bg-slate-400 rounded-full hover:bg-red-700 transition-all"
                            >
                                x
                            </button>
                        )}
                        <Select zIndex={999} value={viewValue(item.id)} data={options} onChange={(e)=>{if(e)onChangeHandle(item.id,e)}} />
                       
                    </div>
                ))}
            </div>
            {modaldata.formuladata?.min !== modaldata.formuladata?.max &&
                (modaldata.formuladata?.max || 0) > cells.length &&
                cmode === "and" && (
                    <div className="flex justify-end">
                        <div>
                            <button
                                onClick={() => addinp()}
                                className="p-2 px-6 bg-purple-400 mt-5 text-white rounded-xl hover:shadow-md hover:bg-purple-700 transition-all focus:ring-4"
                            >
                                Add
                            </button>
                        </div>
                    </div>
                )}
            <div>
                <button
                    className="bg-[#FEA8BD] text-white w-full p-3 mt-5 rounded-2xl hover:bg-[#E88AA1] transition-all focus:ring-4 disabled:bg-gray-200 disabled:cursor-not-allowed"
                    disabled={!validate()}
                    onClick={() => { 
                    setVal(`${modaldata.formuladata?.formula}(${cells.map(item => item.value).toString().replaceAll(",", (cmode === "and" ? "," : ":"))})`);
                    setOpened() }}
                >
                    Turn to Excel Formula
                </button>
            </div>
        </Modal>
    );
};

export default FormulaModal;
