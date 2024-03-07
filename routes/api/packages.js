const express = require('express');
const router = express.Router();
const packagesController = require("../../controllers/api/packages");

// get all packages
router.get('/', packagesController.getAll);

// create package
router.post("/", packagesController.create);

module.exports = router;
