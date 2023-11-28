import prismaClient from "../../prisma";

class DetailOrderService{

 async execute(){
    const order = prismaClient.pedido.findMany({
        include: {
            itens: {
              include: {
                produto: {
                 
                },
              },
            },
          },
    })

    return order;
 }

}

export {DetailOrderService}