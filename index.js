const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
let restaurantsRoutes = require("./routes/restaurants")
//and use it
app.use(restaurantsRoutes)

app.listen(PORT, () => console.log(`Listening on port ${PORT} `));
