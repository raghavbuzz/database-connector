const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./db');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.post('/query', async (req, res) => {
    try {
      const { query } = req.body;
      // const [rows, fields] = await db.query(query);
      return res.status(200).json({
        query: query + ' from API'
      })
    } catch (error) {
        return res.status(404).json({
            error: 'Error encountered !!!',
            message: error
        });
    }
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})

module.exports = app;