import { Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { HomeComponent } from "./home";
import { ListarClienteComponent } from "./listar-cliente";
import { BuscarClienteComponent } from "./buscar-cliente";
import { Top5ClientesComponent } from "./top5-clientes";
import { VisualizarClienteComponent } from "./visualizar-cliente";
export const GerenteRoutes : Routes = [

    { path: 'gerente', component: HomeComponent, canActivate: [AuthGuard], data: {role: 'GERENTE'} },
    { path: 'listar-cliente', component: ListarClienteComponent, canActivate: [AuthGuard], data: {role: 'GERENTE'} },
    { path: 'buscar-cliente', component: BuscarClienteComponent, canActivate: [AuthGuard], data: {role: 'GERENTE'} },
    { path: 'top5-clientes', component: Top5ClientesComponent, canActivate: [AuthGuard], data: {role: 'GERENTE'} },
    { path: 'visualizar-cliente/:id', component: VisualizarClienteComponent, canActivate: [AuthGuard], data: {role: 'GERENTE'} }
]