// const express = require('express')
// // const favicon = require('serve-favicon')
// const bodyParser = require('body-parser')
// const sequelize = require('./src/db/sequelize')
// const cors = require('cors')
// const swaggerDocs = require('./swagger.js')
// const myRoutes = require('./src/routes/myRoutes.js'); 

// //Initialisation du serveur
// const app = express()
// const port = process.env.PORT || 3000

// //Ajout de la doc API avec Swagger
// swaggerDocs(app, port);

// //Middlewares
// app
//     // .use(favicon(__dirname + '/favicon.ico'))
//     .use(bodyParser.json())
//     .use(cors())

// // Routes
// app.use('/', myRoutes);

// //Initialise la DB avec les mocks (désactivé en prod)
// //sequelize.initDb()

// //Gestion des erreurs 404
// app.use(({ res }) => {
//     const message = "Impossible de trouver la ressource demandée! Vous pouvez essayer une autre URL"
//     res.status(404).json({ message })
// })

// //Serveur à écouter
// app.listen(port, () => console.log(`Notre app Node est démarrée sur: http://localhost:${port}`))

const express = require('express')
const serverless = require('serverless-http')

const app = express();

const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        "hello": "hi!"
    })
})

app.use('/.netlify/functions/api', router)

module.exports.handler = serverless(app)