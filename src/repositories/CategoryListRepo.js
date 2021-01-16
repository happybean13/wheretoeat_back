const BaseRepo = require('./BaseRepo')

module.exports = class CategoryListRepo extends BaseRepo {
    async getCategoryList () {
        const queryString = 'SELECT category_name FROM WHERETOEAT.CATEGORY;'
        const result = await this._selectPlural(queryString, [])
        return result
    }
}