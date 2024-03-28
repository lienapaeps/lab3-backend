const express = require('express');
const router = express.Router();
const activitiesController = require("../../controllers/api/activities");

// create activity
router.post("/", activitiesController.create);

// get activity by id
router.get("/:id", activitiesController.getById);

module.exports = router;
