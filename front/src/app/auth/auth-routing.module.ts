import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { CreateAccountComponent } from "./create-account";

export const LoginRoutes : Routes = [
    
    { path:'login', component: LoginComponent },
    { path:'create', component: CreateAccountComponent }
];