const BaseRepo = require('./BaseRepo')

module.exports = class RestaurantListRepo extends BaseRepo {
    async getRestaurantList () {
        const queryString = 'SELECT A.id, A.name, A.link, A.rate, B.category_name FROM RESTAURANT_LIST as A LEFT JOIN CATEGORY as B on A.category = B.category_id;'
        const result = await this._selectPlural(queryString, [])
        return result
    }
}