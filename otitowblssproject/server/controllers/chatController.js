const OpenAI = require("openai");
const Course = require("../models/Course");
const Material = require("../models/Material");

const askQuestion = async (req, res) => {
  try {
    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const { message } = req.body;

    const response = await client.responses.create({
      model: "gpt-5-mini",
      input: message,
    });

    return res.json({
      answer: response.output_text,
      source: "AI",
    });
  } catch (error) {
    console.log("AI unavailable. Using fallback...");

    try {
      const question = req.body.message.toLowerCase();

      // Search courses
      const courses = await Course.find();

      const matchingCourse = courses.find(
        (course) =>
          question.includes(course.code.toLowerCase()) ||
          question.includes(course.title.toLowerCase()),
      );

      if (matchingCourse) {
        return res.json({
          answer: `
Course Code: ${matchingCourse.code}
Title: ${matchingCourse.title}
Description: ${matchingCourse.description}
Level: ${matchingCourse.level}
          `,
          source: "Database",
        });
      }

      // Search materials
      const materials = await Material.find().populate("course");

      const matchingMaterial = materials.find(
        (material) =>
          material.title && question.includes(material.title.toLowerCase()),
      );

      if (matchingMaterial) {
        return res.json({
          answer: `
Material: ${matchingMaterial.title}
Description: ${matchingMaterial.description}
          `,
          source: "Database",
        });
      }

      return res.json({
        answer:
          "AI service is unavailable and no matching course information was found.",
        source: "Fallback",
      });
    } catch (fallbackError) {
      return res.status(500).json({
        message: fallbackError.message,
      });
    }
  }
};

module.exports = {
  askQuestion,
};
