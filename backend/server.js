require('dotenv').config(); 

const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();

app.use(cors());

const port = 3001;

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DB,
  password: process.env.PG_PASS,
  port: process.env.PG_PORT,
});

app.get("/data", async (req, res) => {

  try {
    const result = await pool.query("SELECT * FROM games");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

app.get("/data/genre/:genre", async (req, res) => {
    const genre = req.params.genre;

    if (genre !== 'Fighting' || genre !== 'RPG' || genre !== 'Shooter') {
      res.status(400).send("Invalid input");
    }


    try {
      const result = await pool.query(`SELECT * FROM games WHERE genre = '${genre}'`);
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
});



app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
