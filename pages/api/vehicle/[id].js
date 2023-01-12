import { query } from "../../../lib/db";
import { RemoveKeyInArray } from "../../../lib/utils";

export default async function handler(req, res) {
  
  const { id } = req.query
  let data = null
  console.log(id)
  try {
    const querySql = `SELECT * FROM vehicle as v LEFT JOIN category as c ON v.category_id = c.category_id
    where v.vehicle_id = ?
    `;
    const values = [id];
    const dataAwait = await query({ query: querySql, values: values })
    data = RemoveKeyInArray(dataAwait,["category_id","registration"])
    res.status(200).json(data[0]);
  } catch (error) {
    if(error.message === "Cannot convert undefined or null to object"){
      res.status(404).json({ error: 'vehicle not found' });
    }else{
      res.status(500).json({ error: error.message });
    }
    
  }
  
}