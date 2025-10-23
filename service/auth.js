const jwt = require("jsonwebtoken");
const secret = "kiobostha12345"; // Ideally, use environment variables to store secrets

function setUser(user) {
  const payload = {
    id: user._id,
    email: user.email,
  };
  return jwt.sign(payload, secret, { expiresIn: "1h" });
}
function getUser(token) {
  if (!token) return null;
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    return null;
  }
}

module.exports = {
  setUser,
  getUser,
};
