const Charity = require("../Models/Charities");
const Continent = require("../Models/Continents");
const Biome = require("../Models/Biomes");
const Animal = require("../Models/Animals");

//Charities
const createCharity = async (req, res) => {
  try {
    const charity = await new Charity(req.body);
    await charity.save();
    return res.status(201).json({ charity });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getAllCharities = async (req, res) => {
  try {
    const charity = await Charity.find();
    return res.status(200).json({ charity });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getCharityById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const charity = await Charity.findById(id);
    if (charity) {
      return res.status(200).json({ charity });
    }
    return res(404).send("Charity with the specified ID does not exist.");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateCharity = async (req, res) => {
  try {
    const charity = await Charity.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(charity);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const deleteCharity = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Charity.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Charity was deleted.");
    }
    throw new Error("Charity not found.");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//Continents
const createContinent = async (req, res) => {
  try {
    const continent = await new Continent(req.body);
    await continent.save();
    return res.status(201).json({ continent });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllContinents = async (req, res) => {
  try {
    const continent = await Continent.find();
    return res.status(200).json({ continent });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getContinentById = async (req, res) => {
  try {
    const { id } = req.params;
    const continent = await Continent.findById();
    if (continent) {
      return res.status(200).json({ continent });
    }
    return res.status(404).send("Continent with that ID was not found.");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateContinent = async (req, res) => {
  try {
    const continent = await Continent.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(continent);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const deleteContinent = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Continent.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Continent was deleted.");
    }
    throw new Error("Continent not found.");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//Biomes
const createBiome = async (req, res) => {
  try {
    const biome = await new Biome(req.body);
    await biome.save();
    return res.status(201).json({ biome });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getAllBiomes = async (req, res) => {
  try {
    const biome = await Biome.find();
    return res.status(200).json({ biome });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getBiomeById = async (req, res) => {
  try {
    const { id } = req.params;
    const biome = await Biome.findById();
    if (biome) {
      return res.status(200).json({ biome });
    }
    return res.status(404).send("Biome with that ID was not found.");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const updateBiome = async (req, res) => {
  try {
    const biome = await Biome.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(biome);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const deleteBiome = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Biome.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Biome was deleted.");
    }
    throw new Error("Biome not found.");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//Animals
const createAnimal = async (req, res) => {
  try {
    const animal = await new Animal(req.body);
    await animal.save();
    return res.status(201).json({ animal });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getAllAnimals = async (req, res) => {
  try {
    const animal = await Animal.find();
    return res.status(200).json({ animal });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAnimalById = async (req, res) => {
  try {
    const { id } = req.params;
    const animal = await Animal.findById();
    if (animal) {
      return res.status(200).json({ animal });
    }
    return res.status(404).send("Animal with that ID was not found.");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const updateAnimal = async (req, res) => {
  try {
    const animal = await Animal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(animal);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const deleteAnimal = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Animal.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Animal was deleted.");
    }
    throw new Error("Animal not found.");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = {
  createCharity,
  getAllCharities,
  getCharityById,
  updateCharity,
  deleteCharity,
  createContinent,
  getAllContinents,
  getContinentById,
  updateContinent,
  deleteContinent,
  createBiome,
  getAllBiomes,
  getBiomeById,
  updateBiome,
  deleteBiome,
  createAnimal,
  getAllAnimals,
  getAnimalById,
  updateAnimal,
  deleteAnimal,
};
