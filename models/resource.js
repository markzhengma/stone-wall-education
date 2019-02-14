const db = require('../db/config');
const Resource = {};

Resource.findAllResources = () => {
    return db.query(`
        SELECT *
        FROM resources;
    `)
};

Resource.findResourceByCat = category => {
    return db.query(`
        SELECT * 
        FROM resources
        WHERE category = $1;
    `, [category])
};

module.exports = Resource;