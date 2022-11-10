import { UserEntity } from "../../domain/user.entity"
import { UserRepository } from "./../../domain/user.repository"

const userTest = {
    name: "lulo",
    email: "lulo@correo.com",
    uuid: "00001"
}

export class MockRepository implements UserRepository {

    /**
     * Mock
     */
    async findUserByID(uuid: string): Promise<UserEntity | null> {
        return userTest
    }
    async registerUser(user: UserEntity): Promise<any | null> {
        return user
    }
    async listUsers(): Promise<UserEntity[] | null> {
        return [userTest]
    }

}
