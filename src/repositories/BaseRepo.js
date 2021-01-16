const query = require('../utils/queryBuilder')

module.exports = class BaseRepo {
    _selectSingular (queryString, args = []) {
        return query(async conn => {
            const [rows] = await conn.query(queryString, args)
            return rows[0]
        })
    }

    _selectPlural (queryString, args = []) {
        return query(async conn => {
            const [rows] = await conn.query(queryString, args)
            return rows
        })
    }

    _insert (queryString, args = []) {
        return query(async conn => {
            const [obj] = await conn.query(queryString, args)
            return obj.insertId
        })
    }

    _insertPlural (queryString, args = []) {
        return query(async conn => {
            const [obj] = await conn.query(queryString, args)
            return [obj.insertId, obj.affectedRows]
        })
    }

    _update (queryString, args = []) {
        return query(async conn => {
            const [rows] = await conn.query(queryString, args)
            return rows
        })
    }

    _delete (queryString, args = []) {
        return query(async conn => {
            await conn.query(queryString, args)
        })
    }
}
