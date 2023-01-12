import { query } from "../db";

const deletede = (req, res) => {
  const { id } = req.query;
  try {
    const querySql = `DELETE FROM vehicle WHERE vehicle_id = ${id}`;

    query({ query: querySql }).then((data) => {
      res.status(200).json(data);
    });
  } catch (error) {
    // unhide to check error
    res.status(500).json({ error: error.message });
  }
};

export default deletede;
