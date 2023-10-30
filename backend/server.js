const express = require("express");
const cors = require("cors");
const app = express();
const Data = require("./dataModel"); // Import your Mongoose model
// Enable CORS for all routes
app.use(cors());
app.use(express.json()); // Add this line to parse JSON request bodies

app.get("/home", (req, res) => {
    res.json({
        name: "aditya",
        surname: "palodkar"
    });
});




app.post("/name-surname", async (req, res) => {
  const { name, surname } = req.body;

  if (name && surname) {
    const newData = new Data({ name, surname });

    try {
      const savedData = await newData.save();
      res.json(savedData); // Send back the saved data
    } catch (error) {
      console.error("Error saving data to MongoDB: ", error);
      res.status(500).json({ error: "Error saving data" });
    }
  } else {
    res.status(400).json({ error: "Both name and surname are required." });
  }
});


app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
