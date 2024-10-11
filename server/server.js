const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 6000;

// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json

// Initialize SQLite database
const db = new sqlite3.Database('./reviews.db', (err) => {
    if (err) {
        console.error('Error opening database ' + err.message);
    } else {
        console.log('Connected to the SQLite database.');
        db.run(`CREATE TABLE IF NOT EXISTS reviews (
            id INTEGER PRIMARY KEY,
            pizzaPlace TEXT NOT NULL,
            location TEXT NOT NULL,
            score REAL NOT NULL
        )`);
    }
});

// API endpoint to get all reviews
app.get('/api/reviews', (req, res) => {
    db.all('SELECT * FROM reviews', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ reviews: rows });
    });
});

// API endpoint to add a review
app.post('/api/reviews', (req, res) => {
    const { pizzaPlace, location, score } = req.body;
    const sql = 'INSERT INTO reviews (pizzaPlace, location, score) VALUES (?, ?, ?)';
    db.run(sql, [pizzaPlace, location, score], function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ id: this.lastID, pizzaPlace, location, score });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
