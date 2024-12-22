const authenticate = (req, res, next) => {
  // Mock authentication for now
  req.user = { id: 'mockUserId' };
  next();
};

module.exports = { authenticate };