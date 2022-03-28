import  { isNumber, sum as mathsum,combinations,mean } from "mathjs"

export type mode = "and" | "to"
export type formulatype = {
    name:string,
    keywords:string[],
    formula: string,
    min:number,
    max:number,
    mode?: mode,
    function: (x:any)=>string
}

const getNum = (value : string[])=>{
    let sumval:number[] = []
    value.forEach(item=>{
        sumval.push(parseInt(item))
    })
    for(const i in sumval){
        if(isNaN(sumval[i])){
            return null
        }
    }
    return sumval
}

const sum = (value:string[])=>{
    let sumval = getNum(value)
    if(!sumval) return "Not a number"
    return mathsum(sumval)
}

 const cnr = (value:string[])=>{
    if(value.length !== 2) return "Only accept 2 arguments"
    let sumval = getNum(value)
    if(!sumval) return "Not a number"
    if(sumval[0] < sumval[1]) return "2nd argument must be less than or equal to 1st argument"
    return combinations(sumval[0],sumval[1])+""

}

const romanize = (value:string[])=>{
    if(value.length !== 1) return "Only accept 1 argument"
    let sumval = getNum(value)
    if(!sumval) return "Not a number"
    let num = sumval[0]
    var digits = String(+num).split(""),
    key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
           "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
           "","I","II","III","IV","V","VI","VII","VIII","IX"],
    roman = "",
    i = 3;
    while (i--)
    //@ts-ignore
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

const product = (value:string[])=>{
    if(value.length < 2) return "Only accept 2 or more arguments"
    let sumval = getNum(value)
    if(!sumval) return "Not a number"
    let x = 1
    sumval.forEach(item=>{x *= item})
    return x
}

export const average = (value:string[])=>{
    if(value.length < 2) return "Only accept 2 or more arguments"
    let sumval = getNum(value)
    if(!sumval) return "Not a number"
    return mean(sumval)
}

const formula:formulatype[] = [
    {"name":"Combination rule","keywords":["combination rule","cnr","เลือก","choose","combin"],formula:"=COMBIN",min:2,max:2,mode:"and",function:cnr},
    {"name":"Sum","keywords":["summation rule","sum","บวก","summation","add"],formula:"=SUM",min:2,max:100,function:sum},
    {"name":"Romanize","keywords":["roman","โรมัน","xxi","romanize"],formula:"=ROMAN",min:1,max:1,function:romanize,mode:"and"},
    {"name":"Multiply","keywords":["Multiply","คูณ","product","Multiplication"],formula:"=PRODUCT",min:2,max:100,function:product},
    {"name":"Mean","keywords":["avg","Average","ค่ากลาง","mean","middle","median"],formula:"=AVERAGE",min:2,max:100,function:average},


]

export default formula