const express = require("express");
const router = express.Router();
const axios = require("axios");

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.post("/test", function(req, res) {
  console.log(req.body);
  let result = axios
    .get(
      `https://${req.body.server}.whatismymmr.com/api/v1/summoner?name=${req.body.summonerName}`
    )
    .then(response => {
      res.send(response.data[req.body.gameMode]);
    });
});

module.exports = router;
