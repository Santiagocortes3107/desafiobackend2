const ProductManager = require('./ProductManager');
const pm = new ProductManager('./productos.json');

console.log(pm.getProducts());
pm.addProduct('desinfectante', 'Ayudin limpiadores de pisos', 200, 'desinfectante.png', 'P001', 15);
pm.addProduct('jabon de ropa', 'Skip jabon liquido para diluir', 150, 'jabonderopa.png', 'P002', 5);
pm.addProduct('limpia vidrios', 'Cif ultra rápido vidrios', 300, 'limpiavidrios.png', 'P003', 3);

console.log(pm.getProducts());

console.log(pm.getProductById(2));
pm.getProductById(14);
