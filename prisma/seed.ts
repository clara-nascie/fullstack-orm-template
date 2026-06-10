import { prisma } from '../src/prisma';

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

seed()
  .then(() => {
    console.log('Seed executado com sucesso')
  })
  .catch((e) => {
    console.error(e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
