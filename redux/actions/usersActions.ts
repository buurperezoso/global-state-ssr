import constants from "../../constants"
import { Action } from "../../interfaces/Actions"
import { User } from "../../interfaces/User"

const setUsers = (users: User[]): Action => {
    return {
        type: constants.reduxType.set,
        payload: { users }
    }
}

const toggleUser = (userID: string | undefined) => {
    return {
        type: constants.reduxType.toggleUser,
        payload: { userID }
    }
}

const deleteUser = (userID: string | undefined) => {
    return {
        type: constants.reduxType.deleteUser,
        payload: { userID }
    }
}


const usersActions = {
    setUsers,
    toggleUser,
    deleteUser,
}

export default usersActions;
