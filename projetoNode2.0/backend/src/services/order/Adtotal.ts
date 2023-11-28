import prismaClient from "../../prisma";

interface OrderRequest {
  id_pedido: string;
}

class SomaOrderService {
  async execute({ id_pedido }: OrderRequest) {
    const order = await prismaClient.pedido.findUnique({
      where: {
        id: id_pedido,
      },
      include: {
        itens: {
          include: {
            produto: true,
          },
        },
      },
    });

    

    const total = order.itens.reduce((acc, item) => acc + parseFloat(item.produto.preco) * item.quantidade, 0);

    return { order, total };
  }
}

export { SomaOrderService };
