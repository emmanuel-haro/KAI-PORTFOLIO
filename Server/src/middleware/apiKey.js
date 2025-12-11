const { API_KEY } = require("../config");

exports.requireApiKey = (req, res, next) => {
  if (!API_KEY) return next(); // if not configured, skip

  const key = req.header("x-api-key") || req.query.apiKey;

  if (!key || key !== API_KEY) {
    return res.status(401).json({ message: "Invalid API key" });
  }

  next();
};
