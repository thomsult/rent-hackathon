import { query } from "../../../lib/db";
import { useRouter } from 'next/router'

export default async function handler(req, res) {
  
  const { id } = req.query
  console.log(id)
  try {
    const querySql = "SELECT * FROM customers where customer_id = ?";
    const values = [id];
    query({ query: querySql, values: values }).then((data)=>{
        res.status(200).json(data);
    });
  } catch (error) {
    // unhide to check error
    // res.status(500).json({ error: error.message });
  }
}