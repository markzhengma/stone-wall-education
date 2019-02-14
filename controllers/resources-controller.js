const Resource = require('../models/resource');
const resourcesController = {};

resourcesController.findAllResources = (req, res) => {
    Resource.findAllResources()
    .then(resource => {
        res.json(resource);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
};

resourcesController.findResourceByCat = (req, res) => {
    Resource.findResourceByCat(req.params.category)
    .then(resource => {
        res.json(resource);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
};

module.exports = resourcesController;