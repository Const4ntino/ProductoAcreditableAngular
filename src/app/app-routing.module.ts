import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { AcercaComponent } from './paginas/acerca/acerca.component';
import { ContactosComponent } from './paginas/contactos/contactos.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./paginas/inicio/inicio.module').then(m => (m.InicioModule))
  },
  {
    path: 'acerca',
    loadChildren: () => import('./paginas/acerca/acerca.module').then(m => (m.AcercaModule))
  },
  {
    path: 'productos',
    loadChildren: () => import('./paginas/productos/productos.module').then(m => (m.ProductosModule))
  },
  {
    path: 'contacto',
    // component: ContactosComponent
    loadChildren: () => import('./paginas/contactos/contactos.module').then(m => m.ContactosModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
