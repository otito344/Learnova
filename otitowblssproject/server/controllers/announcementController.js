const Announcement = require("../models/Announcement");

const createAnnouncement = async (req, res) => {
  try {
    const announcement = await Announcement.create({
      title: req.body.title,
      message: req.body.message,
    });

    res.status(201).json(announcement);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.find().sort({ createdAt: -1 });

    res.json(announcements);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createAnnouncement,
  getAnnouncements,
};
