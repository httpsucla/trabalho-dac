import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Gerente, User } from 'src/app/shared/models';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-gerente',
  templateUrl: './create-gerente.component.html',
  styleUrls: ['./create-gerente.component.css']
})
export class CreateGerenteComponent implements OnInit {

  @ViewChild('formGerente') formGerente! : NgForm;
  gerente! : Gerente;
  constructor(private adminService : AdminService, private router : Router) { }

  ngOnInit(): void {
    this.gerente = new Gerente();
    
  }

  insert() : void {
    if (this.formGerente.form.valid) {
      this.adminService.insert(this.gerente);
      this.router.navigate( ["/listar-gerente"]);
    }
  }

}
