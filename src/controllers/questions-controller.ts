import { Request, Response } from "express"
import { prisma } from "../prisma"

class QuestionsController {
  async index(request: Request, response: Response) {
    const questions = await prisma.question.findMany({
      where: {
        title: {
          contains: request.query.title?.toString().trim(),
          mode: 'insensitive',
        }
      },
      //ordenar de forma decrescente pela data que foi criada
      orderBy: {
        createdAt: 'desc',
      }
    })
    
    return response.json(questions)
  }

  async create(request: Request, response: Response) {
    const {title, content, user_id} = request.body

    await prisma.question.create({
      data: {
        title,
        content,
        userId: user_id
      }
    })

    return response.status(201).json()
  }

  async update(request: Request, response: Response) {
    const {id} = request.params
    const {title,content} = request.body

    const question = await prisma.question.update({
      data: {
        title,
        content
      },
      where: {
        id,
      }
    })
    return response.json(question)
  }

  async remove(request: Request, response: Response) {
    const {id} = request.params

    await prisma.question.delete({
      where: {
        id,
      }
    })
    return response.status(204).json()
  }
}

export { QuestionsController }
