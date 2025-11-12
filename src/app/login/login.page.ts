import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {
  correo: string = '';
  password: string = '';

  constructor(private router: Router, private alertController: AlertController) {}

  async ingresar() {
    const correoValido = this.correo.includes('@');
    const passwordValido = this.password.trim().length > 0;

    if (correoValido && passwordValido) {
      const alerta = await this.alertController.create({
        header: 'Bienvenido',
        message: 'Ingreso exitoso',
        buttons: [
          {
            text: 'Aceptar',
            cssClass: 'alert-button'
          }
        ],
        cssClass: 'custom-alert'
      });
      await alerta.present();
      this.router.navigate(['/inicio']);
    } else {
      const alerta = await this.alertController.create({
        header: 'Error',
        message: 'Correo debe contener @ y la contraseña no puede estar vacía.',
        buttons: [
          {
            text: 'Aceptar',
            cssClass: 'alert-button'
          }
        ],
        cssClass: 'custom-alert'
      });
      await alerta.present();
    }
  }
}
