const mongoose = require("mongoose");
const app = require("./app");
const { DATABASE_URL, PORT } = require("./config");
const { log } = require("./utils/logger");

const start = async () => {
  if (!DATABASE_URL) {
    console.error("DATABASE_URL not set in .env");
    process.exit(1);
  }

  try {
    await mongoose.connect(DATABASE_URL);
    log("Connected to MongoDB");
    app.listen(Number(PORT), () => {
      log(`Server listening on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server", err);
    process.exit(1);
  }
};

start();
