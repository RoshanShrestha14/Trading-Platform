const router = require("express").Router();
const { Holdings, HoldingsNew } = require("../Controllers/HoldingsController");

router.get("/", Holdings);
router.post("/new", HoldingsNew);

module.exports = router;
