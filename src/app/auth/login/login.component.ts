import { Component } from '@angular/core';
import { Router  } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí
import { MaterialModule } from '../../material.module'; // Importa FormsModule aquí

@Component({
  selector: 'app-login',
  imports: [FormsModule,MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router ) {}
    // Método que se ejecuta al enviar el formulario
    onSubmit() {
      // Aquí puedes hacer otras acciones, como validar el formulario, etc.
      
      // Luego rediriges al usuario a la ruta deseada
      console.log('---------------------El método onSubmit ha sido llamado'); // Log para verificar
      this.router.navigate(['product']);  // Sustituye '/ruta-deseada' por la ruta que quieres
    }
}
