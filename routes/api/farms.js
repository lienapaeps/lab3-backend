const express = require('express');
const router = express.Router();
const farmsController = require("../../controllers/api/farms");

// get all farms
router.get('/', farmsController.getAll);

// create farm
router.post("/", farmsController.create);

// get farm by id
router.get("/:id", farmsController.getById);

module.exports = router;
