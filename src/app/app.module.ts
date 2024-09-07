import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { PaginasModule } from './paginas/paginas.module';
import { CambiarFondoDirective } from './cambiar-fondo.directive';
import { LetraCapitalPipe } from './letra-capital.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CambiarFondoDirective,
    LetraCapitalPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaginasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
