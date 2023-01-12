import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { query } from "../../lib/db";

// const SECRET_KEY = process.env.SECRET_KEY || "secretKey"; //replace this with your actual secret key

export default async function handler(req, res) {
  try {
    const querySql = "SELECT * FROM customers where email = ? ";
    const values = [req.body.email];
    query({ query: querySql, values: values }).then((data) => {
      if (data.length === 0) {
        return res.status(404).json({ error: "User not found" });
      }
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(req.body.password, salt);
      console.log(hashedPassword);
      const checkPassword = bcrypt.compareSync(
        req.body.password,
        data[0].hashedPassword
      );
      if (!checkPassword)
        return res.status(400).json({ error: "Wrong password or username!" });

      res.status(200).json(data);
      return;
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
