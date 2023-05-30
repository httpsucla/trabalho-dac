import { Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { DepositarComponent } from "./depositar";
import { ExtratoComponent } from "./extrato";
import { HomeComponent } from "./home";
import { SaqueComponent } from "./saque";
import { TransferenciaComponent } from "./transferencia";
import { PerfilComponent } from "./perfil";

export const ClienteRoutes : Routes = [

    { path: 'cliente', component: HomeComponent, canActivate: [AuthGuard], data: {role: 'CLIENTE'} },
    { path: 'depositar', component: DepositarComponent, canActivate: [AuthGuard], data: {role: 'CLIENTE'} },
    { path: 'extrato', component: ExtratoComponent, canActivate: [AuthGuard], data: {role: 'CLIENTE'} },
    { path: 'saque', component: SaqueComponent, canActivate: [AuthGuard], data: {role: 'CLIENTE'} },
    { path: 'transferencia', component: TransferenciaComponent, canActivate: [AuthGuard], data: {role: 'CLIENTE'} },
    { path: 'perfil/:id', component: PerfilComponent, canActivate: [AuthGuard], data: {role: 'CLIENTE'} }
]