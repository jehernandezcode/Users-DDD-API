import { addUser, deleteUser, disableUser, edithUser } from "./permissions"

exports.roleMarketAdmin = {
    name: "Admin",
    access: [addUser, deleteUser, disableUser, edithUser]
}
exports.roleUserStore = {
    name: "Client",
    access: []
}
exports.roleMarketPlace = {
    name: "Seller",
    access: [edithUser]
}