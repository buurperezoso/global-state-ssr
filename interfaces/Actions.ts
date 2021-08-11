import { User } from "./User";

export interface Payload {
    users?: User[];
    userID?: string;
}

export interface Action {
    type: string;
    payload: Payload;
}