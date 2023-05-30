import { registerLocaleData } from '@angular/common';
import { NgModule, DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth'; 
import { ClienteModule } from './cliente';
import { AdminModule } from './admin';
import { GerenteModule } from './gerente';
import ptBr from '@angular/common/locales/pt';

registerLocaleData(ptBr);
@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    ClienteModule,
    AdminModule,
    GerenteModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
