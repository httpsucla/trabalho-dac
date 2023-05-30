import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { AuthService } from 'src/app/auth';
import { Cliente, User } from 'src/app/shared/models';
import { Operacao } from 'src/app/shared/models/operacao.model';
import { ClienteService } from '../services/cliente.service';
@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {
  cliente !: Cliente;
  dataInicio: string = '';
  dataFim: string = '';
  operacoes!: Operacao[];
  
  @ViewChild('formExtrato') formExtrato! : NgModel; 

  constructor(private authService : AuthService,
              private clienteService: ClienteService ) {
  }
  
  ngOnInit(): void {
    this.cliente = this.authService.usuarioLogado;
    if(this.cliente.conta?.historico){
      this.operacoes = this.cliente.conta?.historico;
      console.log(this.cliente.conta?.historico);
      console.log(this.operacoes)
    } 
    console.log("ta junto" + this.cliente.criacao);
  }

  busca(){
   let array =  this.clienteService.filtroData(this.dataInicio,this.dataFim);
    if(array){
      this.operacoes = array;
    }
    console.log(array);
  }

}
