import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Gerente } from 'src/app/shared/models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalGerenteComponent } from '../modal-gerente/modal-gerente.component';
@Component({
  selector: 'app-list-gerente',
  templateUrl: './list-gerente.component.html',
  styleUrls: ['./list-gerente.component.css']
})
export class ListGerenteComponent implements OnInit {

  gerentes : Gerente[] = [];

  constructor(private adminService : AdminService,
              private modalService : NgbModal) { }

  ngOnInit(): void {
    console.log("Inicializou listagem")
    this.gerentes = this.listAllGerentes();
  }

  listAllGerentes() : Gerente[] {
    return this.adminService.listAllGerentes();
  }

  delete($event: any, gerente: Gerente) : void {
    $event.preventDefault();

    if (confirm(`Deseja realmente remover o gerente ${gerente.nome}`)) {
      this.adminService.delete(gerente.id!);
      this.gerentes = this.listAllGerentes();
    }
  }

  abrirModal(gerente: Gerente) {
    const modalRef = this.modalService.open(ModalGerenteComponent);
    modalRef.componentInstance.gerente = gerente;
  }

}
