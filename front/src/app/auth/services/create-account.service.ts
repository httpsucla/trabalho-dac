import { Injectable } from '@angular/core';
import { Cliente, Endereco } from 'src/app/shared/models';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { AuthService } from './auth.service';
import { Conta } from 'src/app/shared/models/conta.model';

const LS_CHAVE : string = "numberAccount";

@Injectable({
  providedIn: 'root'
})
export class CreateAccountService {
  enderecos! : Endereco;
  teste! : any;
  constructor(private http : HttpClient,
              private authService: AuthService) { }


  listAllEndereco() : Endereco[] {
    const enderecos = localStorage[LS_CHAVE];
    return enderecos ? JSON.parse(enderecos) : [];
  }

  public get numberAccount(): number {
    let number = localStorage[LS_CHAVE];
    return(number ? JSON.parse(localStorage[LS_CHAVE]) : null);
  };

  public set numberAccount(number: number) {
    localStorage[LS_CHAVE] = JSON.stringify(number);
  };

  generateNumber(){
    let number = this.numberAccount;
    console.log(this.numberAccount);
    if(!number){
      this.numberAccount = 2000;
      number = this.numberAccount;
    }else{
      this.numberAccount = ++number;
    }
    console.log(number);
    return number;
  }

  insert(cliente : Cliente) : void {

    if(cliente.cpf && cliente.email){
    if(!this.authService.getClienteByCPF(cliente.cpf)){
      if(!this.authService.getClienteByEmail(cliente.email)){
        cliente.id = new Date().getTime();
        cliente.criacao = new Date();
        cliente.perfil = 'CLIENTE';
        cliente.senha = '1234';
        cliente = this.insertConta(cliente);
        this.authService.adicionarUsuarioPendente(cliente); 
        alert(`Sucesso, cliente ${cliente.nome} cadastrado!`)
      } 
    }}
  }

  consultaCEP(cep : string) {

    if (cep !== '') {
      const validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {
        this.teste =  this.http.get(`//viacep.com.br/ws/${cep}/json`).subscribe(data => this.enderecos = this.completaEndereco(data));
        console.log("TESTE " + this.teste);
      }
    }
    
    return this.enderecos;
  }

   private completaEndereco(data : any) : Endereco {
     
    let  endereco = new Endereco();
    endereco.cep = data.cep;
    endereco.logradouro = data.logradouro;
    endereco.complemento = data.complemento;
    endereco.bairro = data.bairro;
    endereco.cidade = data.localidade;
    endereco.estado = data.uf;
    console.log(endereco);
    return endereco;
    
  }

  private insertConta(cliente: Cliente) : Cliente{
      cliente.conta = new Conta();

      if (cliente.salario && cliente.salario >= 2000)
        cliente.conta.limite = cliente.salario/2;
      else if (cliente.salario && cliente.salario < 2000)
        cliente.conta.limite = 0;
      cliente.conta.conta = this.generateNumber();
      
    return cliente;
  }
}
