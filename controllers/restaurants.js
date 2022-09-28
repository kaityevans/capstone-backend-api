const mysql = require("mysql");
const pool = require("../sql");

// List
const list = (req, res) => {
  let sql = "SELECT * FROM ??";
  sql = mysql.format(sql, ["restaurants"]);
  pool.query(sql, (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Hey! Something happened.");
    }
    res.json(rows);
  });
};

// Show
const show = (req, res) => {
  const { id } = req.params;

  let sql = "SELECT * FROM ?? WHERE ?? = ?";
  let replacements = ["restaurants", "id", id];
  sql = mysql.format(sql, replacements);
  pool.query(sql, (err, row) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Hey! Something happened.");
    }
    res.json(row);
  });
};

// Create
const create = (req, res) => {
  const { id, title, address, rating } = req.body;
  let sql = "INSERT INTO ?? VALUES(?, ?, ?, ?);";
  let replacements = ["restaurants", id, title, address, rating];
  sql = mysql.format(sql, replacements);
  pool.query(sql, (err, row) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Hey! Something happened.");
    }
    res.json(row);
  });
};

// Update
const update = (req, res) => {
  const { id } = req.params;
  const { body } = req;

  let sql = "UPDATE ?? SET ? WHERE id = ?;";
  sql = mysql.format(sql, ["restaurants", body, id]);
  pool.query(sql, (err, row) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Hey! Something happened.");
    }
    res.json(row.message);
  });
};

// Remove
const remove = (req, res) => {
  const { id } = req.params;

  let sql = "DELETE FROM ?? WHERE id = ?;";
  sql = mysql.format(sql, ["restaurants", id]);
  pool.query(sql, (err, row) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Hey! Something happened.");
    }
    res.json(row.affectedRows);
  });
};
module.exports = { list, show, create, update, remove };
