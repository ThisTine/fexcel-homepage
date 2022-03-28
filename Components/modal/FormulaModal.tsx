import { Modal } from "@mantine/core";
import Select from "react-select";
import { ChangeEvent, FC, useLayoutEffect, useState } from "react";
import { mode } from "../../json/formula";
import { moduletype } from "../sheet/InputCell";
import { v4 as uuidv4 } from "uuid";

type celldata = { id: string; value: string }

const FormulaModal: FC<{
    opened: boolean;
    setOpened: () => void;
    modaldata: moduletype;
    setVal: (value: string | ChangeEvent<any> | null | undefined) => void
}> = ({ opened, setOpened, modaldata, setVal }) => {
    const [cells, setcells] = useState<celldata[]>([]);
    const [cmode, setcmode] = useState<mode>(
        modaldata.formuladata?.mode || "and"
    );

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
            zIndex={99999}
            opened={opened}
            onClose={() => setOpened()}
            title={modaldata?.formuladata?.name}
        >
            <h1 className="my-5 p-3 bg-slate-500 rounded-2xl text-2xl w-fit text-white">
                {modaldata.formuladata?.formula}({cells.map(item => item.value).toString().replaceAll(",", (cmode === "and" ? "," : ":"))}){" "}
            </h1>
            <Select
                className="flex-[5] mb-5"
                defaultValue={cmode}
                isDisabled={(modaldata.formuladata?.mode !== undefined)}
                
                onChange={(e) => {
                    //@ts-ignore
                    if (e && e.value) setcmode(e.value);
                }}
                options={[
                    //@ts-ignore
                    { value: "and", label: "and" },
                    //@ts-ignore
                    { value: "to", label: "to" },
                ]}
                placeholder={(modaldata.formuladata?.mode !== undefined) ? modaldata.formuladata?.mode :"mode"}
            />
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
                        <input
                            className=" border-2 p-2 w-full  focus-visible:outline-purple-200"
                            onChange={(e) => onChangeHandle(item.id, e.target.value)}
                            value={viewValue(item.id)}
                        />
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
