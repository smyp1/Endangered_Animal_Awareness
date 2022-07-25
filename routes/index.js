const { Router } = require("express");
const controllers = require("../Controllers");
const router = Router();

router.get("/", (req, res) => res.send("This is the root!"));
router.post("/charities", controllers.createCharity);
router.get("/charities", controllers.getAllCharities);
router.get("/charities/:id");
router.put("/charities/:id", controllers.updateCharity);
router.delete("/charities/:id", controllers.deleteCharity);

module.exports = router;
