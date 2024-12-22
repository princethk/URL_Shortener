
const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  originalUrl: String,
  shortId: { type: String, unique: true },
  topic: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Url', urlSchema);