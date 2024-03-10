const express = require("express");
const { Pool } = require("pg");

const app = express();
const port = 3001;
// setup database
// PostgreSQL connection settings
const pool = new Pool({
  user: "your_username",
  host: "localhost",
  database: "your_database",
  password: "",
  port: 5432,
});

app.get("/data", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM your_table");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
