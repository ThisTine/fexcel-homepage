const getChar:(x:number)=>"A"|"B"|"C"|"-1" = (x:number)=>{
    if(x === 0) return "A"
    if(x === 1) return "B"
    if(x === 2) return "C"
    return "-1"
}
const getNum = (x:string)=>{
    if(x === "A") return 0
    if(x === "B") return 1
    if(x === "C") return 2
    return -1

}
const getRowNum = (x:string)=>{
    if(x === "1") return 0
    if(x === "2") return 1
    if(x === "3") return 2
    if(x === "4") return 3
    return -1

}
const getCellArray:(formula:string,data:{A:string,B:string,C:string}[])=>string[] = (formula,data)=>{
    if(!formula) return []
    let arr:string[] = []
    let chararr = formula.split("(")[1]
    if(!chararr){
        return []
    }
    chararr = chararr.replaceAll(")","")
    if(chararr.length === 2){
        
        let col = chararr.split("")
        let colnum = getNum(col[0].toUpperCase())
        let rownum = getRowNum(col[1])
        if(colnum === -1 || rownum ===-1) return []
        let ddc = getChar(colnum)
        if(ddc === "-1") return[]
        arr.push(data[rownum][ddc])
        return arr        
    }
    if(chararr.includes(":") && chararr.includes(",")) return []
    if(chararr.includes(":")){
        let splitedchar = chararr.split(":")
        if(splitedchar.length !== 2) return []
        let c1 = splitedchar[0]
        let c2 = splitedchar[1]
        let col1 = c1.split("")
        let col2 = c2.split("")
        let col1num = getNum(col1[0])
        let col2num = getNum(col2[0])
        if(col1.length !== 2 || col2.length !== 2 || col1num === -1 || col2num === -1) return []
        let row1num = getRowNum(col1[1])
        let row2num = getRowNum(col2[1])
        if(row1num === -1 || row2num === -1) return []
        for(let i = (col1num>col2num ? col2num : col1num) ; i<=(col1num>col2num ? col1num : col2num) ; i++ ){
            for(let j = (row1num > row2num ? row2num :row1num) ; j<=(row1num>row2num ? row1num : row2num) ; j++ ){
                let ddc = getChar(i)
                if(ddc === "-1") return[]
                arr.push(data[j][ddc])
            }
        }
        return arr
    }
    if(chararr.includes(",")){
        console.log(chararr)
        let splitedchar = chararr.split(",")
        for(const i in splitedchar){
            if(!splitedchar[i]) return []
            let charint = splitedchar[i].split("")
            let colnum = getNum(charint[0].toLocaleUpperCase())
            let rownum = getRowNum(charint[1])
            let charNum = getChar(colnum)
            if(colnum === -1 || rownum === -1 || charNum === "-1" ) return []
            arr.push(data[rownum][charNum])
        }
    }
    return arr
}

export default getCellArray