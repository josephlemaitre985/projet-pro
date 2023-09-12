const { Pool } = require('pg');

const pool = new Pool({
  user: 'votre_utilisateur_pg',
  host: 'localhost',
  database: 'nom_de_votre_base_de_donnees',
  password: 'votre_mot_de_passe',
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
