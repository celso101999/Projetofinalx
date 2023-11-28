import prismaClient from "../../prisma";
import {hash}from 'bcryptjs';

interface UserRequest{
    nome:string,
    email:string,
    senha:string
}

class CreateUserService{
  async execute({nome,email,senha}:UserRequest){

      // verifica se o valor do email foi preenchido
      if(!email){
        throw new Error('Email não enviado!');
      }

      // verefica se o email ja foi cadastrado no banco
      const UserAlreadyExists = await prismaClient.usuario.findFirst({
        where :{
            email : email
        }
      })

      if(UserAlreadyExists){
        throw new Error('Email já cadastrado!');
      }

      const senhaHash = await hash(senha,8);

      // cadastro de novo usuario no banco de dados
      const user = await prismaClient.usuario.create({
        data:{
            nome : nome,
            email:email, 
            senha:senhaHash,
        },
        select:{
            id:true,
            nome:true,
            email:true,
        }
      })

      return user;

  }
}

export {CreateUserService}