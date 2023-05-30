import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRoutes } from './auth/auth-routing.module';
import { AdminRoutes } from './admin';
import { GerenteRoutes } from './gerente';
import { ClienteRoutes } from './cliente';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  ...LoginRoutes,
  ...AdminRoutes,
  ...GerenteRoutes,
  ...ClienteRoutes
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
