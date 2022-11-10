import { Request, Response } from "express"
import { UserUseCase } from "./../../application/userUseCase"

export class userController {
    constructor(private userUseCase: UserUseCase){
    //cuando se usa funciones normales de javascript crean un contexto para ello se
    //soluciona con el bind o cambiandolas por una arrow function
    //this.insertCtrl = this.insertCtrl.bind(this) 
    //this.getCtrl = this.getCtrl.bind(this)
    }

    public getCtrl = async (req: Request, res: Response) => {
        const query = req.params
        const users = await this.userUseCase.getDetailUser(query.toString())
        res.send(users)
    }

    public insertCtrl = async (req: Request, res: Response) => {
        const user = await this.userUseCase.registerUser(req.body)
        res.send({user})
    }

    public getList = async (req: Request, res: Response) => {
        const user = await this.userUseCase.getList()
        res.send({user})
    }
}