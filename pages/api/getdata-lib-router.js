import { query } from "../../lib/db";
import React from "react"

export default async function handler(req, res) {
  const id = parseInt(req.body.id);
  try {
    const querySql =
      "SELECT * FROM customers WHERE customer_id = ?";
    const valueParams = [id];
    const data = await query({ query: querySql, values: valueParams });

    res.status(200).json({data});
  } catch (error) {
    // unhide to check error
    // res.status(500).json({ error: error.message });
  }
}
//if needed
// export const config = {
//   api: {
//     externalResolver: true,
//   },
// };
