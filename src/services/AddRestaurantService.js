const AddRestaurantRepo = require('../repositories/AddRestaurantRepo')

module.exports = class AddRestaurantService {
    constructor () {
        this._addRestaurantRepo = new AddRestaurantRepo()
    }
    async addRestaurant(name, link, category, rate) {
        const result = await this._addRestaurantRepo.addRestaurant(name, link, category, rate)
        return result
    }
}
