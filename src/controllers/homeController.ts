import { Request, Response } from "express"

export const home = ((req: Request, res: Response) => {

        // let pessoa = {
    //     nome: 'Fulaninho',
    //     idade: 10
    // }

    res.render('pages/home',{
        nome: "Fulaninho",
        showWelcome: true
    })
})