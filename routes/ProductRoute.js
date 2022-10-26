import express from 'express';
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} from '../controller/Product.js';

const router = express.Router();

// http://localhost:5000/products
router.get('/products', getProducts);
router.get('/product/:id', getProductById);
router.post('/product', createProduct);
router.patch('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);

export default router;