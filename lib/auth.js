import { db } from "../lib/db";
import { bcrypt } from "bcrypt";

export default function register(req, res) {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(req.body.password, salt);

  const query1 =
    "INSERT INTO customers (` firstname`,`lastname`,`adress`,`email`,`phone`,`role`,`licence_number`,`password`) VALUE (?)";

  const values = [
    req.bodyfirstname,
    req.body.lastname,
    req.body.adress,
    req.body.email,
    req.body.phone,
    req.body.role,
    req.body.licence_number,
    hashedPassword,
  ];
  db.query(query1, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("User has been created");
  });
}
