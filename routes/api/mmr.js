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

// router.post("/compare", function(req, res,) {
//   // The request body should look like this:
//       // req.body = {
//       //   gameMode: xxx,
//       //   player1: {
//       //     summunorName: xxx,
//       //     server: xxx
//       //   },
//       //   player2: {
//       //     summunorName: xxx,
//       //     server: xxx
//       //   }
//       // }
//   let result = {}
//   // do api call for player 1 using your own function
//   getMmr(server,player1Handle,mode)
//   // populate result:
//   result.player1 = {mmr: xxx}
//   result.player2 = {mmr: xxx}
//   // do api call to get details for player 1
//   // populate results:
//   result.player1.details = details
//   result.player2.dtails = details
//   result = {
//     player1: {
//       mmr: 123,
//       details: {
//         name: xxx,
//         location: vvv
//       }
//     }
//   }
// });

module.exports = router;
