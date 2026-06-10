import { Request, Response } from "express"
import { prisma } from "../prisma"

class UsersController {
  async index(request: Request, response: Response) {
    //findmany serve para buscar todos os usuários encontrados no banco
    const users = await prisma.user.findMany()
    return response.json(users)
  }

  //criando usuário
  async create(request: Request, response: Response) {
    const {name, email} = request.body

    //método para criar um usuário utilizando o prisma
    await prisma.user.create({ data:{
      name,
      email,
    }
    })
    
    return response.status(201).json()
  }

    // buscando um usuário específico
  async show(request: Request, response: Response) {
    // 1. Extrai o ID dos parâmetros da rota
    const { id } = request.params

    // 2. Busca o usuário único onde o id seja igual ao id extraído
    const user = await prisma.user.findUnique({
      where: { id } // Passamos o id aqui dentro do 'where'
    })

    // 3. Retorna o usuário encontrado
    return response.json(user)
  }

}

export { UsersController }
