import post from "../../../lib/postDeleteChange/post";
import { query } from "../../../lib/db";
import { RemoveKeyInArray } from "../../../lib/utils";

export default async function handler(req, res) {
  console.log(req.method);
  if (req.method === "POST") {
    post(req, res);
  } else {
    let data = null;
    let keyList = [];
    if (req.query.where !== undefined) {
      //exemple = http://localhost:3000/api/vehicle?where&transmission=manuel&fuel_type=diesel&statut=disponible
      //exemple = http://localhost:3000/api/vehicle?where&category_type=A
      delete req.query.where;
      for (const key in req.query) {
        keyList.push(key);
      }

      try {
        const querySql =
          `SELECT * FROM vehicle as v LEFT JOIN category as c ON v.category_id = c.category_id where ${keyList
            .map((el) => `${el} = ? and `)
            .join("")}`.slice(0, -5);

        const values = [...keyList.map((el) => req.query[el])];
        const dataAwait = await query({ query: querySql, values: values });
        data = RemoveKeyInArray(dataAwait, ["category_id", "registration"]);
      } catch (error) {
        // unhide to check error
        res.status(500).json({ error: error.message });
      }
    } else {
      try {
        const querySql =
          "SELECT * FROM vehicle as v LEFT JOIN category as c ON v.category_id = c.category_id";
        const values = [];
        const dataAwait = await query({ query: querySql, values: values });
        data = RemoveKeyInArray(dataAwait, ["category_id", "registration"]);
      } catch (error) {
        // unhide to check error
        res.status(500).json({ error: error.message });
      }
    }
    res.status(200).json(data);
  }
}
