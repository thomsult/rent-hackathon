
import bcrypt from "bcrypt";
import { query } from "../../lib/db";

// const SECRET_KEY = process.env.SECRET_KEY || "secretKey"; //replace this with your actual secret key

export default async function handler(req, res) {
  
  try {
    const querySql = "SELECT * FROM customers where email = ? ";
    const values = [req.body.email];
    const data = await query({ query: querySql, values: values })
    if (data.length === 0) {
      console.log(req.body)
      res.status(404)
      throw new Error("User not found");
    }else{
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(req.body.password, salt);
      console.log(hashedPassword,data);
      
      const checkPassword = bcrypt.compareSync(
        req.body.password,
        data[0].hashedPassword
      );
      if (!checkPassword){
        res.status(400).json({ error: "Wrong password or username!" });
      }else{
          delete data[0].hashedPassword
        res.status(200).json(data);
      }
    }
  } catch (error) {
    res.json({ error: error.message });
  }
}
