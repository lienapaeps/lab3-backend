const express = require('express');
const router = express.Router();
const farmsController = require("../../controllers/api/farms");

// get all farms
router.get('/', farmsController.getAll);

// create farm
router.post("/", farmsController.create);

// get farm by id
router.get("/:id", farmsController.getById);

// get all activities
router.get("/:id/activities", farmsController.getActivities);

// update farm by id
// router.put("/:id", farmsController.update);

module.exports = router;
