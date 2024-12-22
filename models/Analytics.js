const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  ip: String,
  userAgent: String,
  geoLocation: Object,
  url: { type: mongoose.Schema.Types.ObjectId, ref: 'Url' },
});

module.exports = mongoose.model('Analytics', analyticsSchema);