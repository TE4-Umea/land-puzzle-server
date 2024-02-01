const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {

    const allHighscores = await prisma.highscore.findMany({})

    console.dir(allHighscores, { depth: null })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })