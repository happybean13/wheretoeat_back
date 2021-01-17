const BaseRepo = require('./BaseRepo')

module.exports = class AddRestaurantRepo extends BaseRepo {
    async addRestaurant (name, link, category, rate) {
        const queryString = 'INSERT INTO RESTAURANT_LIST (name, link, category, rate) VALUES (?, ?, ?, ?);'
        const result = await this._insert(queryString, [name, link, category, rate])
        return result
    }
}