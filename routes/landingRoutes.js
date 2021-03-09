const router = require("express").Router();
const { getLanding, postLanding } = require("../controllers");


router
  .route("/")
  .get(getLanding)

// router
//   .route("/send")
//   .post(postLanding);

module.exports = router;