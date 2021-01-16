const RestaurantListRepo = require('../repositories/RestaurantListRepo')

module.exports = class RestaurantListService {
    constructor () {
        this._restaurantListRepo = new RestaurantListRepo()
    }
    async getRestaurintList () {
        const result = await this._restaurantListRepo.getRestaurantList()
        return result
    }
}
