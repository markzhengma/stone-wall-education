const db = require('../db/config');
const Resource = {};

Resource.findAllResources = () => {
    return db.query(`
        SELECT *
        FROM resources
        ORDER BY title ASC;
    `)
};

Resource.findResourceByCat = category => {
    return db.query(`
        SELECT * 
        FROM resources
        WHERE category = $1
        ORDER BY title ASC;
    `, [category])
};

module.exports = Resource;