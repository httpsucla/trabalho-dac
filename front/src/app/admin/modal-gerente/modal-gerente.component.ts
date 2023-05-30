import { Component, OnInit, Input } from '@angular/core';
import { Gerente } from 'src/app/shared/models';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'modal-gerente',
  templateUrl: './modal-gerente.component.html',
  styleUrls: ['./modal-gerente.component.css']
})
export class ModalGerenteComponent implements OnInit {

  @Input() gerente! : Gerente;

  constructor(public activeModal : NgbActiveModal) { }
  
  ngOnInit(): void {
  }

}
