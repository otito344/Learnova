const Course = require("../models/Course");

// Create Course
const createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);

    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Courses
const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();

    res.json(courses);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//delete course
const deleteCourse = async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);

    res.json({
      message: "Course deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
//editcourse
const updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(course);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createCourse,
  getCourses,
  deleteCourse,
  updateCourse,
};
