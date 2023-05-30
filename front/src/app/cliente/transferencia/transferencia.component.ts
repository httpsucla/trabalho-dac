import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {
  @ViewChild('formTransferencia') formTransferencia! : NgForm;

  inputValor : number = 0;
  contaDest !: number;

  constructor(public activeModal : NgbActiveModal,
              private clienteService : ClienteService) { }

  ngOnInit(): void {
  }

  transferencia(){
    console.log(this.contaDest);
    this.clienteService.transferencia(this.contaDest,this.inputValor);
    this.activeModal.close();
  }

}
