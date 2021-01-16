const CategoryListRepo = require('../repositories/CategoryListRepo')

module.exports = class CategoryListService {
    constructor () {
        this._categoryListRepo = new CategoryListRepo()
    }
    async getCategoryList () {
        const result = await this._categoryListRepo.getCategoryList()
        return result
    }
}
