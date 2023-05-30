import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home';
import { DepositarComponent } from './depositar';
import { SaqueComponent } from './saque';
import { TransferenciaComponent } from './transferencia';
import { ExtratoComponent } from './extrato';
import { ClienteService } from './services/cliente.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { PerfilComponent } from './perfil';


@NgModule({
  declarations: [
    HomeComponent,
    DepositarComponent,
    SaqueComponent,
    TransferenciaComponent,
    ExtratoComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
    HomeComponent,
    DepositarComponent,
    SaqueComponent,
    TransferenciaComponent,
    ExtratoComponent
  ],
  providers: [
    ClienteService
  ]
})
export class ClienteModule { }
