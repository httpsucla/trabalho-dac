import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from 'src/app/shared/models';
import { GerenteService } from '../services/gerente.service';

@Component({
  selector: 'app-buscar-cliente',
  templateUrl: './buscar-cliente.component.html',
  styleUrls: ['./buscar-cliente.component.css']
})
export class BuscarClienteComponent implements OnInit {
  @ViewChild('formBusca') formBusca!: NgForm;

  cliente: Cliente = new Cliente();
  constructor(private gerenteService: GerenteService) { }

  ngOnInit(): void {
  }
  buscar() {
    let cliente;
    if (this.cliente.cpf) {
      cliente = this.gerenteService.buscarCliente(this.cliente.cpf);
      if (cliente)
        this.cliente = cliente;
    }

  }


}
