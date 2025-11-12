import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'inicio', loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule) },
  { path: 'platos', loadChildren: () => import('./platos/platos.module').then(m => m.PlatosPageModule) },
  { path: 'sobre-nosotros', loadChildren: () => import('./sobre-nosotros/sobre-nosotros.module').then(m => m.SobreNosotrosPageModule) },
  { path: 'contacto', loadChildren: () => import('./contacto/contacto.module').then(m => m.ContactoPageModule) },
  { path: 'registro', loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
