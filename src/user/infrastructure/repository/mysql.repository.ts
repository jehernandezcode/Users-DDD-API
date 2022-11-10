import { UserEntity } from "../../domain/user.entity"
import { UserRepository } from "./../../domain/user.repository"
import UserModel from "../model/user.schema"

export class MongoRepository implements UserRepository {

    /**
     * Mongo
     */

    async findUserByID(uuid: string): Promise<UserEntity | null> {
        return await UserModel.findOne({uuid})
    }
    async registerUser(user: UserEntity): Promise<any | null> {
        return await UserModel.create(user)
    }
    async listUsers(): Promise<UserEntity[] | null> {
        return await UserModel.find()
    }

}
