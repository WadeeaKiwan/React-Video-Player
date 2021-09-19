const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + "/build"));
app.get(/.*/, (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});