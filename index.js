const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Webhook Server Running ✅");
});

app.post("/webhook", (req, res) => {
  console.log("Webhook received:");
  console.log(req.body);

  res.json({
    status: "success",
    data: req.body
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
