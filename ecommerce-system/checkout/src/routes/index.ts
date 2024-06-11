import Router from 'koa-router';
import { getProduct } from '../controllers/productController';
import { getCart, addItemCart, deleteCart, updateCart } from '../controllers/cartController';

const router = new Router();

router.get('/product/:id', getProduct);
router.post('/cart', addItemCart);
router.get('/cart/:id', getCart);
router.put('/cart/:id', updateCart);
router.delete('/cart/:id', deleteCart);

export default router;
