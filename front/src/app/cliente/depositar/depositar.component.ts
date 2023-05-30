import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/shared/models';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-depositar',
  templateUrl: './depositar.component.html',
  styleUrls: ['./depositar.component.css']
})
export class DepositarComponent implements OnInit {

  @ViewChild('formDepositar') formDepositar! : NgForm;
  @Input() cliente! : Cliente;
  inputValor : number = 0;

  constructor(public activeModal : NgbActiveModal,
              private clienteService : ClienteService) { }

  ngOnInit(): void {
  }

  deposito(){
    this.clienteService.deposito(this.inputValor);
    this.activeModal.close();
  }

}
