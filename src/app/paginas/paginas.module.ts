import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { InicioComponent } from './inicio/inicio.component';
//import { ContactosComponent } from './contactos/contactos.component';
import { ComponentesModule } from '../componentes/componentes.module';
//import { ProductosComponent } from './productos/productos.component';
//import { AcercaComponent } from './acerca/acerca.component';



@NgModule({
  declarations: [
    //InicioComponent,
    //ContactosComponent,
    //AcercaComponent
//      ProductosComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule
  ],
  exports: [
    //InicioComponent,
    //AcercaComponent,
    //ContactosComponent
  ]
})
export class PaginasModule { }
