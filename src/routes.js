const express = require("express")
const routes = express.Router();

const ProductController = require("./controllers/productcontroller");

routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.Show);
routes.post("/products",ProductController.store);
routes.put("/products/:id",ProductController.update);
routes.delete("/products/:id",ProductController.destroy );

module.exports = routes;