import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/shared/models';

import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-modal-rejeitar',
  templateUrl: './modal-rejeitar.component.html',
  styleUrls: ['./modal-rejeitar.component.css']
})
export class ModalRejeitarComponent implements OnInit {

  @ViewChild('formMotivo') formMotivo! : NgForm;
  
  @Input() cliente! : Cliente;
  clientes : Cliente[] | undefined = [];

  constructor(public activeModal : NgbActiveModal) { }

  ngOnInit(): void {
  }

}
