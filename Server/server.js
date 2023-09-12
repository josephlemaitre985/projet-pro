const express = require('express');
const cors = require('cors');
const db = require('./database');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// À compléter dans les prochaines étapes...

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// GET tous les établissements
app.get('/etablissements', async (req, res) => {
    try {
      const { rows } = await db.query('SELECT * FROM etablissements');
      res.json(rows);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  // Ajouter, mettre à jour, et supprimer des établissements...
  