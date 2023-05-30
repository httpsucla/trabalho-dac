import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { AuthService } from 'src/app/auth';
import { Cliente, Gerente } from 'src/app/shared/models';

const LS_CHAVE = "clientes";
@Injectable({
  providedIn: 'root'
})
export class GerenteService {
  gerente!: Gerente;
  cliente!: Cliente;

  constructor(private authService: AuthService) {
    this.gerente = authService.usuarioLogado;
  }

  aprovarCliente(cliente: Cliente) {
    cliente.aprovado = true;
    this.gerente.clientes?.forEach((obj) => {
      if(obj.id == cliente.id){
        obj = cliente;
      }
    });
    this.authService.adicionarUsuarios(cliente);
    this.authService.usuarioLogado = this.gerente;
    this.authService.updateUser(this.gerente);
  }

  rejeitarCliente(cliente: Cliente) {
    this.gerente.clientes = this.gerente.clientes?.filter(value => value.id != cliente.id);
    this.authService.usuarioLogado = this.gerente;
    this.authService.updateUser(this.gerente);
  }

  buscarCliente(cpf: string): Cliente | undefined {

    return this.gerente.clientes?.find(cliente => cliente.cpf === cpf);
  }

  retornaClientes(): Cliente[] | undefined {
    let clientes: Cliente[] = [];
    console.log(this.gerente.clientes);
    if (this.gerente.clientes !== undefined) {
      this.gerente.clientes.forEach(cliente => {
        if (!cliente.aprovado)
          clientes.push(cliente);
      })
    };

    return clientes;
  }

  RetornarClientesOrdenado(): Cliente[] | undefined {
    let clientes = this.gerente.clientes;

    if (clientes != undefined)
      clientes = clientes.sort((a, b) => a.nome!?.localeCompare(b.nome!));

    return clientes;
  }

  retornaTopCinco(): Cliente[] | undefined {
    let listClientes = this.gerente.clientes;

    if (listClientes !== undefined) {
      listClientes = listClientes.sort(function (a, b) {
        if (a.conta?.saldoConta === undefined) return 1;
        if (b.conta?.saldoConta === undefined) return -1;
        if (a.conta?.saldoConta === b.conta.saldoConta) return 0;
        return a.conta.saldoConta < b.conta.saldoConta ? 1 : -1;
      }).slice(0, 3);
    }
    console.log(listClientes);
    return listClientes;
  }

  findById(id: number): Cliente | null {
    return this.authService.getClienteById(id);
  }

  getClienteByName(nome: string): Cliente[] | undefined {

    if (this.gerente.clientes) {

      return this.gerente.clientes.filter((cliente) => {
        if (cliente.nome != null && nome != '') {
          if (cliente.nome?.indexOf(nome) >= 0) {
            return true;
          }
        }
        return false;
      });
    }
    return undefined;
  }

  getClienteByCpf(cpf: string): Cliente[] | undefined {
    if (this.gerente.clientes) {

      return this.gerente.clientes.filter((cliente) => {
        if (cliente.cpf != null && cpf != '') {
          if (cliente.cpf?.indexOf(cpf) >= 0) {
            return true;
          }
        }
        return false;
      });
    }
    return undefined;
  }

  filtrarCliente(valor: string): Cliente[] | undefined {
    if (isNaN(Number(valor))) {
      return this.getClienteByName(valor);
    } else {
      return this.getClienteByCpf(valor);
    }
  }


}
