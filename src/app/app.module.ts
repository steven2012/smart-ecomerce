import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {ViewEcomerceComponent  } from './pages/view-ecomerce/view-ecomerce.component';

@NgModule({
  declarations: [
    AppComponent  // Declara el componente raíz
  ],
  imports: [
    BrowserModule,
    ViewEcomerceComponent  // Importa el módulo de comercio electrónico
  ],
  providers: [],
  bootstrap: [AppComponent]  // Arranca la aplicación con AppComponent
})
export class AppModule { }
