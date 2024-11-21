import { Component } from '@angular/core';
import { Router,RouterOutlet } from '@angular/router';
import {ViewEcomerceComponent  } from './pages/view-ecomerce/view-ecomerce.component';
import { CommonModule } from '@angular/common'; // Importa CommonModule

import { FormsModule } from '@angular/forms'; // Importa FormsModule

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ViewEcomerceComponent,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router) {}
  title = 'smart-ecomerce';

 showNavbar(): boolean {
    // Devuelve falso si estás en la ruta de login
    return this.router.url !== '/login';
  } 

}
