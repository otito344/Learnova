const User = require("../models/User");
const Course = require("../models/Course");
const Material = require("../models/Material");

const getStats = async (req, res) => {
  try {
    const students = await User.countDocuments({
      role: "student",
    });

    const courses = await Course.countDocuments();

    const materials = await Material.countDocuments();

    res.json({
      students,
      courses,
      materials,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getStats,
};
