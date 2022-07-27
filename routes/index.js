const { Router } = require("express");
const controllers = require("../Controllers");
const router = Router();

router.get("/", (req, res) => res.send("This is the root!"));
//Routes for charities
router.post("/charities", controllers.createCharity);
router.get("/charities", controllers.getAllCharities);
router.get("/charities/:id", controllers.getCharityById);
router.put("/charities/:id", controllers.updateCharity);
router.delete("/charities/:id", controllers.deleteCharity);

//Routes for continents
router.post("/continents", controllers.createContinent);
router.get("/continents", controllers.getAllContinents);
router.get("/continents/:id", controllers.getContinentById);
router.put("/continents/:id", controllers.updateContinent);
router.delete("/continents/:id", controllers.deleteContinent);

//Routes for biomes
router.post("/biomes", controllers.createBiome);
router.get("/biomes", controllers.getAllBiomes);
router.get("/biomes/:id", controllers.getBiomeById);
router.put("/biomes/:id", controllers.updateBiome);
router.delete("/biomes/:id", controllers.deleteBiome);

//Routes for animals
router.post("/animals", controllers.createAnimal);
router.get("/animals", controllers.getAllAnimals);
router.get("/animals/:id", controllers.getAnimalById);
router.put("/animals/:id", controllers.updateAnimal);
router.delete("/animals/:id", controllers.deleteAnimal);
module.exports = router;
