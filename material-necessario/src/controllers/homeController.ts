import { Request, Response } from 'express';

import { Product } from '../models/Product';

// import {sequelize} from '../instances/mysql'

//importando o User
import {User} from '../models/User'

export const home = async (req: Request, res: Response)=>{

    // try{
    //     await sequelize.authenticate()
    //     console.log("Conexão estabelecida com sucesso")
    // }catch(error){
    //     console.log("Deu problema: ",error)
    // }



    // let age: number = 90;
    // let showOld: boolean = false;

    // if(age > 50) {
    //     showOld = true;
    // }

    // let list = Product.getAll();
    // let expensiveList = Product.getFromPriceAfter(12);

    //findAll puxa as infos do banco 
    let users = await User.findAll()

    //criar um usuario direto no codigo
    // const user = User.build({
    //     name: 'Fulaninho',
    //     age: 15
    // })

    // await user.save()

    res.render('pages/home', {
        // name: 'Viviane',
        // lastName: 'de Lima',
        // showOld,
        // products: list,
        // expensives: expensiveList,
        // frasesDoDia: []
        users
    });
};

export const novoUsuario = async (req: Request, res: Response) => {
    let name = req.body.name
    let age = parseInt(req.body.age)

    if(name&&age){
        const newUser = User.build({
            name,
            age
        })
        await newUser.save()
    }

    //apos salvar os dados redirecionar para home
    res.redirect('/')
}