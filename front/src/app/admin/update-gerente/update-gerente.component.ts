import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Gerente, User } from 'src/app/shared/models';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-update-gerente',
  templateUrl: './update-gerente.component.html',
  styleUrls: ['./update-gerente.component.css']
})
export class UpdateGerenteComponent implements OnInit {

  @ViewChild("formGerente") formGerente! : NgForm;

  gerente! : Gerente
  
  constructor(
    private adminService : AdminService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    const res = this.adminService.findById(id);
    if (res !== null) {
      this.gerente = res;
    }
    else  
      throw new Error("Gerente não encontrado: id = " + id);
  }

  update() : void {

    if(this.formGerente.form.valid) {
      this.adminService.update(this.gerente);
      this.router.navigate(['/listar-gerente']);
    }
  }

}
