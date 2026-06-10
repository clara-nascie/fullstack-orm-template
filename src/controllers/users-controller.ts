import { Request, Response } from "express"
import { prisma } from "../prisma"

class UsersController {
  async index(request: Request, response: Response) {
    return response.json()
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

  //buscando todos os usuários
  async show(request: Request, response: Response) {
    return response.json()
  }
}

export { UsersController }
