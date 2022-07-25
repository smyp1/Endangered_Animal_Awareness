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

module.exports = { createCharity };
