import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/shared/models';
import { GerenteService } from '../services/gerente.service';
import { AuthService } from 'src/app/auth';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalRejeitarComponent } from '../modal-rejeitar/modal-rejeitar.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clientes : Cliente[] | undefined = [];
  constructor(private gerenteService: GerenteService, 
              private authService : AuthService,
              private modalService : NgbModal) { }

  usuarioLogado = this.authService.usuarioLogado;

  ngOnInit(): void {
    this.clientes = this.retornaClientes();
  }

  aprovarCliente(cliente: Cliente){
    this.gerenteService.aprovarCliente(cliente);
    this.clientes = this.retornaClientes();
  }

  retornaClientes(): Cliente[] | undefined{
     return this.gerenteService.retornaClientes();
  }
  rejeitarCliente(cliente: Cliente){
    this.gerenteService.rejeitarCliente(cliente);
    this.clientes = this.retornaClientes();
  }

  abrirModal(cliente: Cliente) {
    const modalRef = this.modalService.open(ModalRejeitarComponent);
    modalRef.componentInstance.cliente = cliente;

    modalRef.result.then(() => { 
      this.rejeitarCliente(cliente); }, () => {});
  }

}
