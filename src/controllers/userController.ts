import {Request, Response} from 'express'

export const contato = ((req: Request, res: Response) =>{
    res.render('pages/contato')
})

export const idade = ((req: Request, res: Response) =>{
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

export const cadastro = ((req: Request, res: Response) =>{
    res.send("Cadastro")
})

export const nome = ((req: Request, res: Response) => {
    let nome: string = req.query.nome as string   
    res.render('pages/nome',{
        nome
    })
})

export const forms = ((req: Request, res: Response) =>{
    let nome: string = req.query.nome as string 
    let idade: number = req.query.idade as unknown as number
    let telefone: number = req.query.telefone as unknown as number
    let endereco: string = req.query.endereco as string 
    res.render('pages/forms',{nome, idade, telefone, endereco})
})

export const nascimento = ((req: Request, res: Response) => {
    res.render("pages/nascimento")
})

export const idadeResultado = ((req: Request, res: Response) => {
    let ano: number = req.body.ano as unknown as number

    let idade: number = (2023 - ano)

    res.render('pages/nascimento',{idade, ano})
})