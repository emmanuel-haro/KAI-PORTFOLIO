const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const portfolioRoutes = require("./routes/portfolioRoutes");
const { requireApiKey } = require("./middleware/apiKey");
const { errorHandler } = require("./middleware/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(requireApiKey);

app.use("/api/portfolio", portfolioRoutes);

app.get("/", (req, res) => res.json({ ok: true }));

app.use(errorHandler);

module.exports = app;
