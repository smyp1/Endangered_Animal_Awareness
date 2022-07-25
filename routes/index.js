const { Router } = require("express");
const controllers = require("../Controllers");
const router = Router();

router.get("/", (req, res) => res.send("This is the root!"));
router.post("/charities", controllers.createCharity);

module.exports = router;
