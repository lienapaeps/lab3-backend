const express = require('express');
const router = express.Router();
const farmsController = require("../../controllers/api/farms");

// get all farms
router.get('/', farmsController.getAll);

// create farm
router.post("/", farmsController.create);

module.exports = router;
