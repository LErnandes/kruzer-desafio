import Router from 'koa-router';
import { updateProduct } from '../controllers/productController';
import { addOrder } from '../controllers/orderController';

const router = new Router();

router.post('/order', addOrder);
router.put('/product/:id', updateProduct);

export default router;
