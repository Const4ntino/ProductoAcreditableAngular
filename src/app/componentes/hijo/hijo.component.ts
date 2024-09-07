import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  @Input() mensajeDeMiPadre? : string;
  @Output() mensajeDelHijoAlPadre = new EventEmitter<string>();
 
  mensaje : string = "";

  emitirMensaje(){
    this.mensajeDelHijoAlPadre.emit(this.mensaje);
  }
}
