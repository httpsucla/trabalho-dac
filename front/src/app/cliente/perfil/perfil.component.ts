import { Component, OnInit, ViewChild } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { AuthService } from 'src/app/auth';
import { NgForm } from '@angular/forms';
import { Cliente, Endereco } from 'src/app/shared/models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  cliente !: Cliente;
  endereco !: Endereco;
  gerenteCliente : any;

  @ViewChild("formPerfil") formPerfil!: NgForm;

  constructor(
    private clienteService: ClienteService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];

    const res = this.clienteService.findById(id);
    if (res !== null) {
      this.cliente = res;
      this.endereco = this.cliente.endereco!;
      this.gerenteCliente = this.authService.getGerenteByIdCliente(this.cliente.id!);   
    }
    else
      throw new Error("Cliente não encontrado: id = " + id);
  }

  update(): void {
    if (this.formPerfil.form.valid) {
      this.clienteService.updateConta(this.cliente);
      console.log(this.cliente);
      this.router.navigate(['/cliente']);
    }
  }

}
