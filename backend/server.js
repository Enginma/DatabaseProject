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
      const result = await pool.query(`SELECT * FROM games WHERE genre = '${genre}' ORDER BY title ASC LIMIT 5`);
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
});

app.get("/data/storeitems/:id", async (req, res) => {
  const id = req.params.id;

  if (!/^\d+$/.test(id)) {
    res.status(500).send("ID must be a number");
    return
  }

  try {
    const result = await pool.query(`SELECT * FROM storecontents WHERE game_id = '${id}'`);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});



app.get("/data/email/:username", async (req, res) => {
  const username = req.params.username;

  try {
    const result = await pool.query(`SELECT * FROM accounts WHERE username = '${username}'`);
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
          res.json({ isAuthenticated: true, user: username }); 
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




app.post('/api/signup', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO accounts (username, email, password, status) VALUES ($1, $2, $3, $4) RETURNING id',
      [username, email, password, 0]
    );

    if (result.rows.length > 0) {
      const newAccountId = result.rows[0].id;
      res.status(201).json({ id: newAccountId, message: 'Account created successfully' });
    } else {
      res.status(400).send('Account creation failed');
    }
  } catch (err) {
    if (err.code === '23505') {
      res.status(409).send('An account with the given username or email already exists');
    } else {
      console.error('Error during account creation:', err);
      res.status(500).send('Internal server error');
    }
  }
});

app.get("/data/developers/games/:email", async (req, res) => {
  const emailaddress = req.params.email;

  try {
    const query = "SELECT * FROM developer_game_view WHERE email ILIKE $1";
    const result = await pool.query(query, [`%${emailaddress}%`]);

    if (result.rows.length > 0) {
      res.json(result.rows);
    } else {
      res.status(404).send("No games found for this developer");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});



app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
