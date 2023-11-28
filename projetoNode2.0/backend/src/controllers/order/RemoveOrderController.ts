import { Request, Response } from 'express'
import { RemoverOrderService } from '../../services/order/RemoveOrderService'

class RemoverOrderController {

    async handle(req: Request, res: Response) {

        const id_pedido = req.query.id_pedido as string;
        const RemoveOrderService = new RemoverOrderService();
        const pedido = await RemoveOrderService.execute({ id_pedido });
        return res.json(pedido);
    }
}

export { RemoverOrderController }