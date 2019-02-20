const express =require('express');
const resourceRoutes = express.Router();
const resourcesController = require('../controllers/resources-controller');

resourceRoutes.get('/all', resourcesController.findAllResources);
resourceRoutes.get('/category/:category', resourcesController.findResourceByCat);

module.exports = resourceRoutes;