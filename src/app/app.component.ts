import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Platos', url: '/platos', icon: 'restaurant' },
    { title: 'Sobre Nosotros', url: '/sobre-nosotros', icon: 'information-circle' },
    { title: 'Contacto', url: '/contacto', icon: 'call' },
    { title: 'Cerrar Sesión', url: '/login', icon: 'log-out' }
  ];

  constructor(private router: Router) {}

  isLoginPage(): boolean {
    return this.router.url === '/login';
  }
}
