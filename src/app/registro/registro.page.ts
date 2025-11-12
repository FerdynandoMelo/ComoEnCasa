import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false,

})
export class RegistroPage {
  nombre: string = '';
  correo: string = '';
  password: string = '';
  confirmar: string = '';
  fechaNacimiento: Date | null = null;

  constructor(private router: Router, private alertController: AlertController) {}

  async registrar() {
    const correoValido = this.correo.includes('@');
    const contrasenasIguales = this.password === this.confirmar;
    const nombreValido = this.nombre.trim().length > 0;
    const fechaValida = this.fechaNacimiento !== null;

    if (correoValido && contrasenasIguales && nombreValido && fechaValida) {
      const alerta = await this.alertController.create({
        header: 'Registro exitoso',
        message: 'Tu cuenta ha sido creada correctamente.',
        buttons: ['Aceptar']
      });
      await alerta.present();
      this.router.navigate(['/login']);
    } else {
      const alerta = await this.alertController.create({
        header: 'Datos inválidos',
        message: 'Verifica que el correo tenga @, las contraseñas coincidan y la fecha esté seleccionada.',
        buttons: ['Aceptar']
      });
      await alerta.present();
    }
  }
}
