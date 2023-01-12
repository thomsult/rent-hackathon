import { query } from "../db";
const update = (req, res) => {
  try {
    const querySql =
      "INSERT INTO vehicle (`brand`,`model`,`image_car`,`registration`,`fuel_type`,`mileage`,`transmission`,`doors`, `seats`, `year`, `daily_cost`,`statut`) VALUES (?, ?, ?, ? , ?, ?,?, ?, ?, ?, ? , ?)";

    const values = [
      req.body.brand,
      req.body.model,
      req.body.image_car,
      req.body.registration,
      req.body.fuel_type,
      req.body.mileage,
      req.body.transmission,
      req.body.doors,
      req.body.seats,
      req.body.year,
      req.body.daily_cost,
      req.body.statut,
    ];
    query({ query: querySql, values: values }).then((data) => {
      res.status(200).json(data);
    });
  } catch (error) {
    // unhide to check error
    res.status(500).json({ error: error.message });
  }
};

export default update;
