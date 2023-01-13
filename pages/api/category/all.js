import { query } from "../../../lib/db";


const ReqByCategory = async (table,category)=>{
    let data = null;
    
    const querySql = `SELECT DISTINCT ${category} FROM ${table}`
  

    const dataAwait = await query({ query: querySql })
    return  dataAwait.map((el)=>{
        return el[category]
    })
}

const describeTable = async (table)=>{
    let data = null;
    
    const querySql = `DESCRIBE ${table}`
  

    const dataAwait = await query({ query: querySql })
    return dataAwait.map((el)=>{
        if(el.Field !== "vehicle_id" && el.Field !== "image_car" && el.Field !== "registration"){
            return el.Field
        }else{
            return null
        }
        
    
    }).filter((el)=>el)
}


export default async function handler(req, res) {
    const table = "vehicle"
    const cats = await describeTable(table)
    let data = {}
    for (let index = 0; index < cats.length; index++) {
        const dataAwait = await ReqByCategory(table,cats[index])
        data = {...data,[cats[index]]:dataAwait}
        
    }
    

  res.status(200).json({...data});
}
