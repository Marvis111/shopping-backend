const { Router } = require("express");
const { allProducts,home } = require("../controllers/indexController");

const indexRoutes = Router();

indexRoutes.get('/',home);
indexRoutes.get('/products',allProducts);

module.exports = indexRoutes;