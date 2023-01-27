//INSTALAR PACOSTES EXPRESS
//npm install express
//npm install @types/express

import express from 'express'
import {Server} from 'http' 

//Usar a biblioteca express
const server = express()

server.get('/',(req,res) =>{res.send("Olá mundo!")})

//Rota estatica
server.get('/cadastro',(req,res) =>{res.send("Cadastro")})

//Rota dinamica
server.get('/noticia/:slug',(req,res) =>{
    let slug: string = req.params.slug
    res.send(`Notícia: ${slug}`)
})

server.get('/voo/:origem-:destino',(req,res) =>{
    let {origem, destino} = req.params
    res.send(`Procurando voos de ${origem} até ${destino}`)
})

//Gerando o servidor na porta 3000
server.listen(3000)

