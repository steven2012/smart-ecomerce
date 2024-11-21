import { Routes } from '@angular/router';
import {LoginComponent } from './auth/login/login.component';
import {ViewEcomerceComponent  } from './pages/view-ecomerce/view-ecomerce.component';
import {ProductComponent  } from './pages/product/product.component';
import {StockComponent  } from './pages/stock/stock.component';
import {ProfileComponent  } from './user/profile/profile.component';



export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },  // Redirige a '/component-a' por defecto
    { path: 'ecomerce', component: ViewEcomerceComponent },  // Ruta para el Componente A
    { path: 'login', component: LoginComponent },  // Ruta para el Componente B
    { path: 'product', component: ProductComponent },  // Ruta para el Componente B
    { path: 'stock', component: StockComponent },  // Ruta para el Componente B
    { path: 'profile', component: ProfileComponent },  // Ruta para el Componente B

    { path: '**', redirectTo: '/login' } 
];
