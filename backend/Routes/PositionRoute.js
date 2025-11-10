const router = require("express").Router();
const {Position} = require('../Controllers/PositionController');
router.get("/", Position);
module.exports = router;

