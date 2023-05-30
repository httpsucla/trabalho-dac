import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';
import { NumericoDirective } from '../shared/directives/numerico.directive';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};
@NgModule({
  declarations: [
    LoginComponent,
    CreateAccountComponent,
    NumericoDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgxMaskModule.forRoot(),
    HttpClientModule
  ],
  exports: [
    LoginComponent,
    CreateAccountComponent
  ]
})
export class AuthModule { }
