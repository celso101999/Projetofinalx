import { Router } from 'express';
import multer from 'multer';


import { CreateUserController } from '../src/controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { DetailUserController } from './controllers/user/DetailUserController';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { CreateProductController } from './controllers/product/CreateProductController';

import uploadConfig from './config/multer';
import { ListProductController } from './controllers/product/ListProductController';
import { CreateOrderController } from './controllers/order/CreateOrderController';
import { RemoverOrderController } from './controllers/order/RemoveOrderController';
import { AddItemController } from './controllers/order/AddItemController';
import { SendOrderController } from './controllers/order/SendOrderController';


import { OneFaceOrderController } from './controllers/order/OneFaceOrderController';
import { TOneFaceOrderController } from './controllers/order/TOneFaceOrderController';
import { DetailOrderController } from './controllers/order/DetailOrderController';
import { AdTotalOrderController } from './controllers/order/AdTotalOrderController';


const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

//-------------ROTAS PA USUARIO---------//

router.post('/user', new CreateUserController().handle);

router.post('/session', new AuthUserController().handle);

router.get('/userinfo', isAuthenticated, new DetailUserController().handle);

//--------Rotas para Categorias-----------//

router.post('/category', isAuthenticated, new CreateCategoryController().handle);

router.get('/listcategory', isAuthenticated, new ListCategoryController().handle);


//--------------Rotas para Produtos--------///

router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle);


router.get('/category/product', isAuthenticated, new ListProductController().handle);

//--------------------------------------------rotas para pedido--------------------------------//

router.post('/order', isAuthenticated, new CreateOrderController().handle);
router.delete('/deleteorder', isAuthenticated, new RemoverOrderController().handle);
router.post('/order/add', isAuthenticated, new AddItemController().handle);

router.delete('/order/remove', isAuthenticated, new RemoverOrderController().handle);
router.put('/order/send', isAuthenticated, new SendOrderController().handle);

router.get('/order/soma', isAuthenticated, new AdTotalOrderController().handle);


router.put('/order/mudado', isAuthenticated, new TOneFaceOrderController().handle);

router.get('/order/pr', isAuthenticated, new OneFaceOrderController().handle);

router.get('/order/listarGlobal', isAuthenticated, new DetailOrderController().handle);

export { router };