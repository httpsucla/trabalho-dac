import { Cliente } from "./cliente.model";

export class Movimentacao {
    constructor (
        public id? : number,
        public dt_hr? : Date,
        public tipo? : string,
        public cliente? : Cliente
    ) { }
}
