import { query } from "../../../lib/db";

export default async function handler(req, res) {
    const table = "category"
  let data = null
  let keyList = []
  if(req.query.where !== undefined){
    //exemple = http://localhost:3000/api/vehicle?where&transmission=manuel&fuel_type=diesel&statut=disponible
    delete req.query.where
    for (const key in req.query) {
      keyList.push(key)
    }

    try {
      const querySql = `SELECT * FROM ${table} where ${keyList.map((el)=>`${el} = ? and `).join('')}`.slice(0, -5)

      const values = [...keyList.map((el)=>req.query[el])];
      data = await query({ query: querySql, values: values })
    } catch (error) {
      // unhide to check error
       res.status(500).json({ error: error.message });
    }
  }else{
    try {
      const querySql = `SELECT * FROM ${table}`;
      const values = [];
      data = await query({ query: querySql, values: values })
    } catch (error) {
      // unhide to check error
       res.status(500).json({ error: error.message });
    }
  }
  res.status(200).json(data);
}

