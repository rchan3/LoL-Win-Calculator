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
      // console.log(response);
      res.send(response.data[req.body.gameMode]);
    })
    .catch(function(error) {
      console.log("no MMR data for summoner");
      res.status(404).send("no MMR data for summoner");
      // res.send(error.response.data.error)
      // res.send({message: "no MMR data for summoner"})
    });
});

module.exports = router;
