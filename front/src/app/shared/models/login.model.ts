import { User } from "./user.model";

export class Login {
    constructor (
        public login? : string,
        public senha? : string,
        public user? : User
    ){}
}
