import { UserEntity } from "./user.entity"

export interface UserRepository {
    findUserByID(uuid:string): Promise<UserEntity | null>;
    registerUser(user: UserEntity): Promise<UserEntity | null>;
    listUsers(): Promise<UserEntity[] | null>;
}