import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { FormsModule } from '@angular/forms';
import { HermanoPadreComponent } from './hermano-padre/hermano-padre.component';



@NgModule({
  declarations: [
    ContadorComponent,
    PadreComponent,
    HijoComponent,
    HermanoPadreComponent
  ],
  imports: [
    FormsModule
  ],
  exports: [
    ContadorComponent,
    PadreComponent,
    HermanoPadreComponent
  ]
})
export class ComponentesModule { }
