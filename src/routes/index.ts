import {Router,Request, Response} from "express"
import { request } from "http"
import * as homeController from '../controllers/homeController'
import * as userController from '../controllers/userController'

//Atribuindo a variavel router o método Router da biblioteca express
const router = Router()

router.get('/',homeController.home)

router.get('/contato',userController.contato)

router.get('/idade',userController.idade)

//Rota estatica
router.get('/cadastro',userController.cadastro)

//Rota dinamica
// router.get('/noticia/:slug',(req: Request,res: Response) =>{
//     let slug: string = req.params.slug
//     res.send(`Notícia: ${slug}`)
// })

// router.get('/voo/:origem-:destino',(req: Request,res: Response) =>{
//     let {origem, destino} = req.params
//     res.send(`Procurando voos de ${origem} até ${destino}`)
// })

router.get('/nome',userController.nome)

router.get('/forms',userController.forms)

router.get('/nascimento',userController.nascimento)

router.post('/nascimento',userController.idadeResultado)


//Método get: só acessar a pagina, fica exposto no cabeçalho da requisição (urn)
//Método post: encapsula os dados e nao aparece na urn

//exportando a variavel router 
export default router