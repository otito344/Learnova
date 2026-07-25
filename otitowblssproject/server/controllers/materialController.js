const Material = require("../models/Material");

const uploadMaterial = async (req, res) => {
  console.log("Upload route hit");
  console.log("Body:", req.body);
  console.log("File:", req.file);

  try {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const material = await Material.create({
      title: req.body.title,
      description: req.body.description,
      course: req.body.course,
      fileUrl: req.file.filename,
    });

    res.status(201).json(material);
  } catch (error) {
    console.error("UPLOAD ERROR:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};
const getMaterialsByCourse = async (req, res) => {
  try {
    const materials = await Material.find({
      course: req.params.courseId,
    });

    res.json(materials);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getMaterials = async (req, res) => {
  try {
    const materials = await Material.find().populate("course");

    res.json(materials);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  uploadMaterial,
  getMaterialsByCourse,
  getMaterials,
};
