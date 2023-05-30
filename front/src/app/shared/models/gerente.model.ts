import { Cliente } from "./cliente.model";
import { User } from "./user.model";

export class Gerente extends User{
        public cpf? : string;
        public clientes? : Cliente[];

        constructor(id?: number,nome ?: string, email?: string, senha?: string, perfil?: string, cpf?: string, clientes?: Cliente[]){
            super(id, nome, email, senha, perfil);
            this.cpf = cpf;
            if(clientes !== undefined){
                this.clientes = clientes;  
            }else{
                this.clientes = [];
            }
            
        }

}

