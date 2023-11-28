import prismaClient from "../../prisma";


class OneFaceOrderService{

    async execute(){

             const order = prismaClient.pedido.findMany({

                where:{
                    status:false
                }
             })

             return order;
    

    }

}


export {OneFaceOrderService}