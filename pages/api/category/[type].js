import { query } from "../../../lib/db";

export default async function handler(req, res) {
    const table = "vehicle"
    let data = null;
    let keyList = []
    for (const key in req.query) {
        keyList.push(key)
      }
      try {
        const querySql = `SELECT DISTINCT ${req.query[keyList[0]]} FROM ${table}`
  

        const dataAwait = await query({ query: querySql })

        data = dataAwait.map((el)=>{
            return el[`${req.query[keyList[0]]}`];
        })
      } catch (error) {
        // unhide to check error
         res.status(500).json({ error: error.message });
      }

  res.status(200).json({...data});
}

