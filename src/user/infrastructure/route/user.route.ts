import { Router } from "express"
import { UserUseCase } from "./../../application/userUseCase"
import { userController } from "./../controller/user.controller"
import { MongoRepository } from "../repository/mongo.repository"

const route = Router()
//Iniciar el repositorio

//const mockUserRepository = new MockRepository()
const mongoRepository = new MongoRepository()

//casos de uso de application
const userUseCase = new UserUseCase(mongoRepository)
 
//user controller
const userCtrl = new userController(userUseCase)

//rutas
route.post("/user", userCtrl.insertCtrl)
route.get("/user", userCtrl.getCtrl)
route.get("/user/all", userCtrl.getList)

export default route