const { verifyGoogleToken } = require('../utils/googleAuth');
const User = require('../models/User');

exports.googleSignIn = async (req, res) => {
  try {
    const { token } = req.body;
    const userData = await verifyGoogleToken(token);
    let user = await User.findOne({ email: userData.email });

    if (!user) {
      user = await User.create({
        email: userData.email,
        name: userData.name,
      });
    }

    // Generate JWT or session (mock response for now)
    res.status(200).json({ message: 'Signed in successfully', user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};