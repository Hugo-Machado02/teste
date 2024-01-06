const express = require("express");
const router = express.Router();

// Rota principal que renderiza o índice
router.get("/", (req, res) => {
  res.render("index"); 
});

module.exports = router;