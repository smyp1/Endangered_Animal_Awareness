const Charity = require("../Models/Charities");

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

module.exports = {
  createCharity,
  getAllCharities,
  getCharityById,
  updateCharity,
  deleteCharity,
};
