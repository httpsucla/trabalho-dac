import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth';
import { Gerente, Cliente } from 'src/app/shared/models';
import { from, min } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  gerentes !: Gerente;

  constructor(private authService: AuthService) { }

  insert(gerente: Gerente): void {

    gerente.id = new Date().getTime();
    gerente.perfil = 'GERENTE';
    this.authService.adicionarUsuarios(gerente);

  }

  findById(id: number): Gerente | null {
    return this.authService.getGerenteById(id);
  }

  update(gerente: Gerente): void {
    this.authService.updateUser(gerente);
  }

  delete(id: number): void {
    let gerentes: Gerente[] = this.authService.getAllGerentes();
    let gerente = this.authService.getGerenteById(id);
    
    if (gerente?.clientes != null) {
      gerente.clientes.forEach(cliente => {
        from(
          gerentes.filter(g => g.id !== id)
        ).pipe(
          min((ant, pro) =>
            (ant?.clientes !== undefined ? ant.clientes.length : 0) <
              (pro?.clientes?.length !== undefined ? pro.clientes.length : 0) ? -1 : 1)
        ).subscribe(x => { gerente = x });

        gerente?.clientes?.push(cliente);
        this.authService.updateUser(gerente!);
      });
    }
    this.authService.deleteUserById(id);
  }

  listAllGerentes(): Gerente[] {
    return this.authService.getAllGerentes();
  }

  retornOrdemAlf(): Cliente[] | undefined {
    let clientes = this.authService.getAllClientes();

    if (clientes != undefined)
      clientes = clientes.sort((a, b) => a.nome!?.localeCompare(b.nome!));

    return clientes;
  }

}
