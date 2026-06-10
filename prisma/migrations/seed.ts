import { prisma } from '../../src/prisma';

async function seed() {
   await prisma.user.createMany({
    data: [
        {
            name: 'Clara',
            email: 'clara@email.com'
        },
        {
            name: 'Maria',
            email: 'marieta@email.com'
        }
    ]
   })
}

//é assim que eu chamo uma função assim que o arquivo é executado 
//essa função vai rodar antes da minha aplicação
//então quando eu for rodar o comando que eu criei para rodar o seed, ele vai executar essa função 
//e então ele vai conectar no banco de dados e vai criar os usuarios que eu defini no seed

//o then é para retornar uma mensagem de sucesso
//o catch é para retornar uma mensagem de erro
//o finally é para desconectar do banco de dados
seed().then(() => {
  console.log('Seed executado com sucesso')
})

seed().catch((e) => {
  console.error(e)
})

seed().finally(async () => {
  await prisma.$disconnect()
})