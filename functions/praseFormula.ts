import formula from "../json/formula"
import getCellArray from "./getCellArray"

const praseFormula = (formulaString:string,cellArray:string[])=>{
    let isformula = false
    for(const i in formula){
    const item = formula[i]
        if(formulaString.toUpperCase().includes(item.formula)){
            isformula = true
            if(cellArray.length === 0){
                return "Error"
            }
            return item.function(cellArray)
        }
    }
    return formulaString
}
export default praseFormula