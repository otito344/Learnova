const path = require("path");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const courseRoutes = require("./routes/courseRoutes");
const materialRoutes = require("./routes/materialRoutes");
const chatRoutes = require("./routes/chatRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const studentRoutes = require("./routes/studentRoutes");
const announcementRoutes = require("./routes/announcementRoutes");

const connectDB = require("./config/db");

const result = dotenv.config();

console.log("DOTENV RESULT:", result);
console.log("OPENAI KEY:", process.env.OPENAI_API_KEY);

console.log("OPENAI KEY:", process.env.OPENAI_API_KEY);

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/materials", materialRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/announcements", announcementRoutes);

app.get("/", (req, res) => {
  res.send("Augustine LMS Backend Running");
});

const PORT = process.env.PORT || 5000;

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
