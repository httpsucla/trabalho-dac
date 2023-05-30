import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth';
import { Gerente } from 'src/app/shared/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  gerentes !: Gerente[];
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.gerentes = this.authService.getAllGerentes();
  }

  getGerenteLength(gerente: Gerente): number {
    if (gerente.clientes)
      return gerente.clientes?.length;
    return 0;
  }

  getSaldoPositivo(gerente: Gerente): number {
    let somatoriaPositiva: number = 0;
    if (gerente.clientes)
      gerente.clientes.forEach(cliente => {
        if (cliente.conta?.saldoConta && cliente.conta?.saldoConta > 0) {
          somatoriaPositiva += cliente.conta.saldoConta; // somar o saldo de cada cliente positivo 

        };
      });
    return somatoriaPositiva;
  }

  getSaldoNegativo(gerente: Gerente): number {
    let somatoriaNegativa: number = 0;
    let nroNegativo;
    if (gerente.clientes)
      gerente.clientes.forEach(cliente => {
        if (cliente.conta?.saldoConta && cliente.conta?.saldoConta < 0) {
          nroNegativo = cliente.conta.saldoConta * -1;
          somatoriaNegativa += nroNegativo; // somar o saldo de cada cliente negativado 
        };
      });
    return somatoriaNegativa;
  }
}
