import { Component } from '@angular/core';

@Component({
  selector: 'app-platos',
  templateUrl: './platos.page.html',
  styleUrls: ['./platos.page.scss'],
  standalone: false,
})
export class PlatosPage {
  platos = [
    { nombre: 'Cazuela de Vacuno', descripcion: 'Tradicional caldo con carne, papas y verduras.', imagen: 'assets/img/plato1.jpg' },
    { nombre: 'Pastel de Choclo', descripcion: 'Clásico chileno con carne, pollo y pastelera de choclo.', imagen: 'assets/img/plato2.jpg' },
    { nombre: 'Empanadas de Pino', descripcion: 'Horneadas, rellenas de carne, cebolla y huevo.', imagen: 'assets/img/plato3.jpg' }
  ];
}
