import { Request, Response } from "express";

import { OneFaceOrderService } from "../../services/order/OneFaceOrderService";

class OneFaceOrderController{

     async handle(req:Request,res:Response){
           
       

        const oneFaceOrderService = new OneFaceOrderService();

        const order = await oneFaceOrderService.execute()

        return res.json(order)
     }

}

export {OneFaceOrderController}
