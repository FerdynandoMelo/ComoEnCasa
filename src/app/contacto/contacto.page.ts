import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: false,
})
export class ContactoPage {
  correo = 'comoencasa@live.cl';
  celular = '+569 2424 2424';
}
