import {Router,Request, Response} from "express"
import { request } from "http"

//Atribuindo a variavel router o método Router da biblioteca express
const router = Router()

router.get('/',(req: Request,res: Response) =>{
    // let pessoa = {
    //     nome: 'Fulaninho',
    //     idade: 10
    // }

    res.render('pages/home',{
        nome: "Fulaninho",
        showWelcome: true
    })
})

router.get('/contato',(req:Request, res: Response) => {res.render('pages/contato')})

router.get('/idade',(req: Request,res: Response) => {
    //se for maior de 18 exibe a mensagem
    //criar variaveis
    let idade: number = 15
    let mostrarIdade: boolean = false

    //usar o if aqui 
    if (idade >= 18){
        mostrarIdade = true
    }
    res.render('pages/idade',{
        nome: "Ciclano",
        mostrarIdade,
        products:[
           /*'Mouse',
            'Leite em pó',
            'Desodorante',
            'Lustra móveis',
            'Sabão em pó' */

        ]
    })
})

//Rota estatica
router.get('/cadastro',(req: Request,res: Response) =>{res.send("Cadastro")})

//Rota dinamica
router.get('/noticia/:slug',(req: Request,res: Response) =>{
    let slug: string = req.params.slug
    res.send(`Notícia: ${slug}`)
})

router.get('/voo/:origem-:destino',(req: Request,res: Response) =>{
    let {origem, destino} = req.params
    res.send(`Procurando voos de ${origem} até ${destino}`)
})

router.get('/nome',(req: Request,res: Response) => {
    let nome: string = req.query.nome as string   
    res.render('pages/nome',{
        nome
    })
})

router.get('/forms',(req: Request,res: Response) => {
    let nome: string = req.query.nome as string 
    let idade: number = req.query.idade as unknown as number
    let telefone: number = req.query.telefone as unknown as number
    let endereco: string = req.query.endereco as string 
    res.render('pages/forms',{nome, idade, telefone, endereco})
})

router.get('/nascimento',(req: Request,res: Response) => {res.render("pages/nascimento")})

router.post('/nascimento',(req: Request,res: Response) =>{
    let ano: number = req.body.ano as unknown as number

    let idade: number = (2023 - ano)

    res.render('pages/nascimento',{idade, ano})
})


//Método get: só acessar a pagina, fica exposto no cabeçalho da requisição (urn)
//Método post: encapsula os dados e nao aparece na urn

//exportando a variavel router 
export default router