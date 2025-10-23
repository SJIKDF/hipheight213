import express from "express";
const app = express();

// Serve static files (like webhooks.json)
app.use(express.static("public"));

// Optional: add a simple route
app.get("/", (req, res) => {
  res.send("✅ Roblox Webhook Server is Running!");
});

const port = process.env.PORT || 10000;
app.listen(port, () => console.log(`Server running on port ${port}`));
