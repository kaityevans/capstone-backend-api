const express = require('express');
const restaurantsController = require('../controllers/restaurants');
const router = express.Router();

router.get('/api/capstone', restaurantsController.list)
router.get("/api/capstone/:id", restaurantsController.show)
router.post("/api/capstone/", restaurantsController.create);
router.put("/api/capstone/:id", restaurantsController.update);
router.delete("/api/capstone/:id", restaurantsController.remove);

module.exports = router

//I added these three lines to fix the cors problem
// var cors = require('cors')
// var app = express()
// app.use(cors())
