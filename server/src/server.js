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

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
