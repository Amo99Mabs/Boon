const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect("your_mongodb_connection_string", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Boon Crowdfunding App");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
