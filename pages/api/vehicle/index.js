import post from "../../../lib/postDeleteChange/post";
import { query,queryAll } from "../../../lib/db";
import { RemoveKeyInArray } from "../../../lib/utils";

export default async function handler(req, res) {
  let data = null
  if (req.method === "POST") {
    post(req, res);
  } else {
    
    if (req.query.where !== undefined) {
      try {
        delete req.query.where;
        let where = ""
        const po = Object.keys(req.query)
        const vo = [...Object.values(req.query)]
        console.log(req.query,)
        let sd = ""
        if(po.length === 1 && [...vo.join(',').split(',')].length === 1 ){
          
          sd = po[0]+'="' + vo[0]+'"'
          where = "where "+ sd
        }
        else{
          console.log("po")
          for (let index = 0; index < po.length; index++) {
            sd += po[index]+'="' + vo[index].join('" or '+po[index]+'="')+'" AND '
            
        }
        where = "where "+ sd.slice(0,-4)
      }
        
        
        console.log(sd)
        
        const query =
              `SELECT * FROM vehicle as v LEFT JOIN category as c ON v.category_id = c.category_id ${where} `;

              console.log(query)
                const dataAwait = await queryAll({query});
                data = RemoveKeyInArray(dataAwait, ["category_id", "registration"]);
                
    }catch (error) {
        // unhide to check error
        res.status(500).json({ error: error.message });
      }
    }else {
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
    
    
  }
  await res.status(200).json(data);
}