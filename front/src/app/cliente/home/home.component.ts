import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth';
import { Cliente } from 'src/app/shared/models';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DepositarComponent } from '../depositar';
import { SaqueComponent } from '../saque';
import { TransferenciaComponent } from '../transferencia';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cliente !: Cliente;

  constructor(private authService : AuthService, private modalService : NgbModal) { }

  ngOnInit(): void {
    this.cliente = this.authService.usuarioLogado;
    console.log("AQUI")
    console.log(this.cliente);
    console.log(this.cliente.conta?.historico)
  }

  depositar() {
    const modalRef = this.modalService.open(DepositarComponent);
    this.atualizarUsuario(modalRef);
  }

  saque() {
    const modalRef = this.modalService.open(SaqueComponent);
    this.atualizarUsuario(modalRef);
   }

   transferir() {
    const modalRef = this.modalService.open(TransferenciaComponent);
    this.atualizarUsuario(modalRef);
   }

   atualizarUsuario(modalRef : NgbModalRef){
    modalRef.result.then(() => { 
      this.cliente = this.authService.usuarioLogado;
    }, () => {
      this.cliente = this.authService.usuarioLogado; 
    });
   }

}
