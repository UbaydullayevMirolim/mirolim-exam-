const {Router} = require("express");
const {register} = require("../controller/auth")
const{blog}= require("../controller/blog")
const router = Router();

router.post("/register", register)
.post("/blog", blog )

module.exports = router;