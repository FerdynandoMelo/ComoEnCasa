import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { InicioPage } from './inicio.page';

@NgModule({
  declarations: [InicioPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: InicioPage
      }
    ])
  ]
})
export class InicioPageModule {}
