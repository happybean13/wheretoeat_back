const BaseRepo = require('./BaseRepo')

module.exports = class AddRestaurantRepo extends BaseRepo {
    async AddRestaurantRepo (restaurant) {
        const queryString = 'INSERT INTO `WHERETOEAT`.`RESTAURANT_LIST` (`name`, `link`, `category`, `rate`) VALUES (?, ?, ?, ?);'
        const result = await this._insert(queryString, [])
        return result
    }
}