import { Request, Response } from "express";
import { RemoveItemService } from "../../services/order/RemoveItemService";

class RemoveOrderController {

    async handle(req: Request, res: Response) {

        const id_item = req.query.id_item as string;

        const removeItemService = new RemoveItemService();

        const item = removeItemService.execute({ id_item });

        return res.json(item);
    }
}

export { RemoveItemService }