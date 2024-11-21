import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-view-ecomerce',
  imports: [CommonModule],
  templateUrl: './view-ecomerce.component.html',
  styleUrl: './view-ecomerce.component.css'
})
export class ViewEcomerceComponent {
  isMenuOpen: boolean = false; // Define la propiedad que controla el estado del menú

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
