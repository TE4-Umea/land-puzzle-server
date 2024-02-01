const express = require('express')
const app = express()
const cors = require('cors')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

app.use(cors())

app.get('/getHighscore', async function (req, res) {
    const allHighscores = await prisma.highscore.findMany({
        orderBy: {
            score: 'desc',
        },
    })
    res.json(
        {
            data: allHighscores,
        }
    )
})

app.post('/postHighscore', async function (req, res) {
    const { score = 0, name = 'temp' } = req.query
    const newHighscore = await prisma.highscore.create({
        data: {
            name: name,
            score: parseInt(score)
        }
    })
})

app.delete('/removeLowestHighscore', async function (req, res) {
    const rowWithLowestValue = await prisma.highscore.findFirst({
        orderBy: {
            score: 'asc',
        },
    })
    if (rowWithLowestValue) {
        const deletedRow = await prisma.highscore.delete({
            where: {
                id: rowWithLowestValue.id,
            },
        })
    }
})


app.listen(8080)