import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';
import { BuscarClienteComponent } from './buscar-cliente/buscar-cliente.component';
import { Top5ClientesComponent } from './top5-clientes/top5-clientes.component';
import { GerenteService } from './services/gerente.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { ModalRejeitarComponent } from './modal-rejeitar/modal-rejeitar.component';
import { VisualizarClienteComponent } from './visualizar-cliente';


@NgModule({
  declarations: [
    HomeComponent,
    ListarClienteComponent,
    BuscarClienteComponent,
    Top5ClientesComponent,
    ModalRejeitarComponent,
    VisualizarClienteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    RouterModule
  ],
  exports: [
    HomeComponent,
    ListarClienteComponent,
    BuscarClienteComponent,
    Top5ClientesComponent,
    ModalRejeitarComponent,
    VisualizarClienteComponent    
  ],
  providers: [
    GerenteService
  ]
})
export class GerenteModule { }
