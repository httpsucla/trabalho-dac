import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/shared/models';
import { GerenteService } from '../services/gerente.service';

@Component({
  selector: 'app-visualizar-cliente',
  templateUrl: './visualizar-cliente.component.html',
  styleUrls: ['./visualizar-cliente.component.css']
})
export class VisualizarClienteComponent implements OnInit {

  cliente: Cliente = new Cliente();

  constructor(private gerenteService : GerenteService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    const res = this.gerenteService.findById(id);
    if (res !== null) {
      this.cliente = res;
    }
    else  
      throw new Error("Cliente não encontrado: id = " + id);
  }

}
