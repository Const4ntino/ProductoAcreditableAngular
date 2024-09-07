import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcercaRoutingModule } from './acerca-routing.module';
import { AcercaComponent } from './acerca.component';
import { ComponentesModule } from 'src/app/componentes/componentes.module';


@NgModule({
  declarations: [
    AcercaComponent
  ],
  imports: [
    CommonModule,
    AcercaRoutingModule,
    ComponentesModule
  ]
})
export class AcercaModule { }
