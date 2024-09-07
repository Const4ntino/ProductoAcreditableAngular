import { Component, OnInit } from '@angular/core';
import { ServicioCompartidoService } from 'src/app/servicios/servicio-compartido.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  saludoPaternal: string = "Hola hijo mío. Te saluda tu Padre";
  mensajeDelHijo: string = "";
  textoDelServicio: string = "";

  constructor(private _servicioCompartido: ServicioCompartidoService) {}

  recibirMensajeDelHijo($event: string) {
    this.mensajeDelHijo = $event;
  }

  ngOnInit(): void {
    this.textoDelServicio = this._servicioCompartido.getTextoCompartido();
  }

}
