require('dotenv').config(); 

const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
app.use(express.json());
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

    if (genre !== 'Fighting' && genre !== 'RPG' && genre !== 'Shooter') {
      res.status(400).send("Invalid input");
      return; 
    }


    try {
      const result = await pool.query(`SELECT * FROM games WHERE genre = '${genre}'`);
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  try {
      const result = await pool.query('SELECT verify($1, $2) AS verified', [username, password]);
      if (result.rows[0].verified === 1) {
          res.json({ isAuthenticated: true, user: username }); // Simplified, usually you'd also issue a token or session
      } else {
          res.status(401).json({ isAuthenticated: false });
      }
  } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
  }
});

app.post('/api/logout', async (req, res) => {
  try {
      await pool.query('UPDATE accounts SET status = $1', ['0']);
      res.status(200).send('Logout successful');
  } catch (err) {
      console.error('Error during logout:', err);
      res.status(500).send('Failed to update status on logout');
  }
});

app.get("/data/search", async (req, res) => {
  const searchQuery = req.query.q; 

  if (!searchQuery) {
    return res.status(400).send("Search query is required");
  }

  try {
    const result = await pool.query(
      "SELECT * FROM games WHERE title ILIKE $1 OR genre ILIKE $1",
      [`%${searchQuery}%`] 
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});



app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
