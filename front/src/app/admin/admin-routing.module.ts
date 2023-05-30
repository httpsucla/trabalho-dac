import { Routes } from "@angular/router";
import { CreateGerenteComponent } from "./create-gerente";
import { UpdateGerenteComponent } from "./update-gerente";
import { ListGerenteComponent } from "./list-gerente";
import { RelatorioClienteComponent } from "./relatorio-cliente";
import { HomeComponent } from "./home";
import { AuthGuard } from "../auth/auth.guard";

export const AdminRoutes : Routes = [
    { path: 'admin', component: HomeComponent, canActivate: [AuthGuard], data: {role: 'ADMIN'} },
    { path: 'listar-gerente', component: ListGerenteComponent, canActivate: [AuthGuard], data: {role: 'ADMIN'} },
    { path: 'criar-gerente', component: CreateGerenteComponent, canActivate: [AuthGuard], data: {role: 'ADMIN'} },
    { path: 'editar-gerente/:id', component: UpdateGerenteComponent, canActivate: [AuthGuard], data: {role: 'ADMIN'} },
    { path: 'relatorio-cliente', component: RelatorioClienteComponent, canActivate: [AuthGuard], data: {role: 'ADMIN'} }
]