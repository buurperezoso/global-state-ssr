import constants from "../../constants";
import { Action } from "../../interfaces/Actions";
import { User } from '../../interfaces/User';

const initialState: { users: User[] } = {
    users: []
}

const usersReducer = (state = initialState, action: Action) => {
    let usersArray;
    switch (action.type) {
        case constants.reduxType.set:
            return {
                ...state,
                users: action.payload.users
            }
        case constants.reduxType.toggleUser:
            usersArray = state.users.map((user) => {
                if (user.id === action.payload.userID) {
                    user.active = !user.active;
                }
                return user;
            });
            return {
                ...state,
                users: usersArray
            }
        case constants.reduxType.deleteUser:
            usersArray = state.users.filter((user) => user.id !== action.payload.userID);
            return {
                ...state,
                users: usersArray
            }
        default:
            return state;
    }
};

export default usersReducer;
