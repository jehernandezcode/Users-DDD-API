import { UserRepository } from "./../domain/user.repository"
import { UserValue } from "./../domain/user.value"

export class UserUseCase {
    constructor(private readonly userRepository: UserRepository) {}

    public registerUser = async ({name, email, description}) => {
        const userValue = new UserValue({name, email, description })
        const userCreated = await this.userRepository.registerUser(userValue)
        return userCreated
    }

    public getDetailUser = async (uuid:string) => {
        const user = await this.userRepository.findUserByID(uuid)
        return user
    }

    public getList = async () => {
        const user = await this.userRepository.listUsers()
        return user
    }
}