import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CreateAccountService } from '../services/create-account.service';
import { Cliente, Endereco } from 'src/app/shared/models';
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  @ViewChild('formCreateAccount') formCreateAccount! : NgForm;

  cliente! : Cliente;
  endereco!: Endereco;
  preenchido!: any;
  message! : string;

  constructor(private createaccountService : CreateAccountService, private router : Router) { }

  ngOnInit(): void {
    this.cliente = new Cliente();
    this.endereco = new Endereco();
  }

  insert(): void {
    this.cliente.endereco = this.endereco;
    console.log(this.cliente);
    if (this.formCreateAccount.form.valid) {
      this.createaccountService.insert(this.cliente);
      this.router.navigate( ["/login"] );
    }
  }

  consultaCEP() {   
    if(this.endereco.cep !== undefined){
      this.preenchido = this.createaccountService.consultaCEP(this.endereco.cep);
    }
  }
    
}
