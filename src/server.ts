//INSTALAR PACOSTES EXPRESS
//npm install express
//npm install @types/express

import express, { Router } from 'express'
import {Server} from 'http'

//importando as rotas 
import mainRoutes from './routes/index'

import path from 'path'

import mustache from 'mustache-express'

//Usar a biblioteca express
const server = express()

server.set('view engine','mustache')

//usando as rotas
server.use(mainRoutes)

//Criando rota p/ pasta public
server.use(express.static(path.join(__dirname,'../public')))

//Rota p/ pasta views
server.set('views',path.join(__dirname,'views'))
server.engine('mustache', mustache())

server.use((req,res) =>{
    res.status(404).send("Página não encontrada :(")
})

//Gerando o servidor na porta 3000
server.listen(3000)


