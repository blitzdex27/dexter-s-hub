const { Router } = require("express");
const { signupPost } = require("../controllers/auth");

const router = new Router();

router.post("/signup", signupPost);

module.exports = router;
