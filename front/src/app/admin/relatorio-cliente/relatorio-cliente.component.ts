import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/shared/models';
import { AuthService } from 'src/app/auth';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-relatorio-cliente',
  templateUrl: './relatorio-cliente.component.html',
  styleUrls: ['./relatorio-cliente.component.css']
})
export class RelatorioClienteComponent implements OnInit {

  clientes : Cliente[] | undefined = [];
  gerenteCliente : any;

  constructor(private authService : AuthService, private adminService : AdminService) { }

  ngOnInit(): void {
    this.clientes = this.retornOrdemAlf();

  }

  getGerentedoCliente(id : number) {
    this.gerenteCliente = this.authService.getGerenteByIdCliente(id);
    console.log(this.gerenteCliente);
    return this.gerenteCliente.nome;
  }

  retornOrdemAlf(): Cliente[] | undefined {
    return this.adminService.retornOrdemAlf();
  }

}
