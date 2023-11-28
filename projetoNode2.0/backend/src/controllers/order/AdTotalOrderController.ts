import {Request,Response} from 'express';

import { AdTotalOrderService } from '../../services/order/AdTotalOrderService';

class AdTotalOrderController{

    async handle(req:Request,res:Response){
                
     const {id_pedido} = req.body;

     const adTotalOrderService = new AdTotalOrderService();

     const order = await adTotalOrderService.execute({id_pedido});

     return res.json(order);

    }
}

export{AdTotalOrderController}