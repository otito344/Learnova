const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");

const {
  uploadMaterial,
  getMaterials,
  getMaterialsByCourse,
} = require("../controllers/materialController");

router.post(
  "/",
  (req, res, next) => {
    upload.single("file")(req, res, (err) => {
      if (err) {
        console.error("MULTER ERROR:", err);
        return res.status(500).json({
          message: err.message,
        });
      }

      next();
    });
  },
  uploadMaterial,
);

router.get("/", getMaterials);
router.get("/course/:courseId", getMaterialsByCourse);

module.exports = router;
