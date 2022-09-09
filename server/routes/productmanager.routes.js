const ProductController = require("../controllers/productmanager.controller");

module.exports = app => {
    app.get("/products/all", ProductController.findAllProducts);
    app.get("/products/:id", ProductController.findOneProduct);
    app.put("/products/update/:id", ProductController.updateExistingProduct);
    app.post("/products/new", ProductController.createNewProduct);
    app.delete("/products/delete/:id", ProductController.deleteProduct);
};