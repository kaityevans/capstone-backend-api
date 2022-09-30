const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
let restaurantsRoutes = require("./routes/restaurants");
app.use(restaurantsRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(PORT, () => console.log(`Listening on port ${PORT} `));
