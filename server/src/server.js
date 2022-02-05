const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

const initRoutes = require("./routes/web");
const connectDB = require("./configs/db.config");

// Connect to DB;
connectDB();

// Config routes
initRoutes(app);

app.use((req, res) => {
  return res.status(404).json({ message: "Unauthorized" });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
