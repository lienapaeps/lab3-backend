const express = require('express');
const router = express.Router();
const authController = require("./../controllers/auth");

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post("/login", authController.login);

router.post("/signup", authController.signup);

router.get("/", authController.getAll);

router.get("/:id", authController.getUserById);


module.exports = router;
