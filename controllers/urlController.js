const Url = require('../models/Url');
const Analytics = require('../models/Analytics');
const { getGeoLocation } = require('../utils/geoLocation');

exports.createShortUrl = async (req, res) => {
  try {
    const { originalUrl, topic } = req.body;
    const shortId = Math.random().toString(36).substr(2, 8);

    const url = await Url.create({
      originalUrl,
      shortId,
      topic,
      user: req.user.id,
    });

    res.status(201).json(url);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.redirectUrl = async (req, res) => {
  try {
    const { shortId } = req.params;
    const url = await Url.findOne({ shortId });

    if (!url) return res.status(404).json({ message: 'URL not found' });

    // Log analytics
    const analyticsData = {
      ip: req.ip,
      userAgent: req.headers['user-agent'],
      geoLocation: await getGeoLocation(req.ip),
      url: url.id,
    };
    await Analytics.create(analyticsData);

    res.redirect(url.originalUrl);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};