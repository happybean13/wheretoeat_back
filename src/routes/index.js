var express = require('express');
var router = express.Router();
const RestaurantListService = require('../services/RestaurantListService')
const restaurantListService = new RestaurantListService()
const AddRestaurantService = require('../services/AddRestaurantService')
const addRestaurantService = new AddRestaurantService()
const CategoryListService = require('../services/CategoryListService')
const categoryListService = new CategoryListService()

/* GET restaurant list. */
router.get('/list', async (req, res, next) => {
  const result = await restaurantListService.getRestaurintList()
  res.status(200).json({ status: 200, data: result });
});

/* GET category list. */
router.get('/add/category', async (req, res, next) => {
  const result = await categoryListService.getCategoryList()
  res.status(200).json({ status: 200, data: result });
});

/* Post restaurant*/
router.post('/add/submit', async (req, res, next) => {
  try {
    const {name, link, category, rate} = req.body
    console.log(link)
    await addRestaurantService.addRestaurant(name, link, category, rate)
    res.status(200).json({ status: 200, msg: 'Success' })
} catch (err) {
    res.status(500).json({ msg: err.message })
}
});

module.exports = router;
