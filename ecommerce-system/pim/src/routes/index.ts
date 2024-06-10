import Router from 'koa-router';
import { addProduct, updateProduct } from '../controllers/productController';

const router = new Router();

router.post('/product', addProduct);
router.put('/product/:id', updateProduct);

export default router;
