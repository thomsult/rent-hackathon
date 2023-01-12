
import bcrypt from "bcrypt";
import { data } from "browserslist";
import { query } from "../../lib/db";

export default async function handler(req, res) {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(req.body.password, salt);

  try {
    const querySql =
      "INSERT INTO customers (`first_name`,`last_name`,`address`,`email`,`hashedPassword`,`phone`,`license_number`,`role`) VALUES (?, ?, ?, ? , ?, ?,?, ?)";

    const values = [
      req.body.first_name,
      req.body.last_name,
      req.body.address ||null,
      req.body.email,
      hashedPassword,
      req.body.phone ||null,
      req.body.license_number ||null,
      req.body.role ||"user",
    ];
    const data = await query({ query: querySql, values: values })
    res.status(200).json(data);
  } catch (error) {
    // unhide to check error
     res.status(500).json({ error: error.message });
  }
}
