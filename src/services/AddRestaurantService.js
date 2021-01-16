const AddRestaurantRepo = require('../repositories/AddRestaurantRepo')

module.exports = class AddRestaurantService {
    constructor () {
        this._addRestaurantRepo = new AddRestaurantRepo()
    }
    async addRestaurant() {
        const result = await this._addRestaurantRepo.addRestaurant()
        return result
    }
}
