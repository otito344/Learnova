const User = require("../models/User");

const getStudents = async (req, res) => {
  try {
    const students = await User.find({
      role: "student",
    }).sort({ createdAt: -1 });

    res.json(students);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getStudents,
};
