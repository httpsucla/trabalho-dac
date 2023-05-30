import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/shared/models';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent implements OnInit {

  @ViewChild('formSaque') formSaque! : NgForm;
  @Input() cliente! : Cliente;
  inputValor : number = 0;

  constructor(public activeModal : NgbActiveModal,
              private clienteService : ClienteService) { }

  ngOnInit(): void {
    
  }

  saque(){
    this.clienteService.saque(this.inputValor);
    this.activeModal.close();
  }



}
