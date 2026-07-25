const express = require("express");

const router = express.Router();

const {
  createCourse,
  getCourses,
  deleteCourse,
  updateCourse,
} = require("../controllers/courseController");

router.post("/", createCourse);

router.get("/", getCourses);

router.delete("/:id", deleteCourse);

router.put("/:id", updateCourse);

module.exports = router;
