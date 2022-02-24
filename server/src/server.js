const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

const initRoutes = require("./routes/web");
const connectDB = require("./configs/db.config");

const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
