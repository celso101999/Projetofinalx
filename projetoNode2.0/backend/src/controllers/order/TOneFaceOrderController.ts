import { Request, Response } from "express";

import { TOneFaceOrderService } from "../../services/order/TOneFaceOrderService";

class TOneFaceOrderController {

   async handle(req: Request, res: Response) {

      const { id_pedido } = req.body;

      const tOneFaceOrderService = new TOneFaceOrderService();

      const order = await tOneFaceOrderService.execute({ id_pedido })

      return res.json(order)
   }

}

export { TOneFaceOrderController }

