import prismaClient from "../../prisma";

interface OrdeRequest {
    id_pedido: string;
}

class SendOrderService{

    async execute({id_pedido}:OrdeRequest){

        const order = await prismaClient.pedido.update({
            where:{
                id:id_pedido


            },
            data:{
                rascunho: false
            }

        })
        return order;
    }
}

export{SendOrderService}