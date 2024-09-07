import { Component, OnInit } from '@angular/core';
import { ServicioCompartidoService } from 'src/app/servicios/servicio-compartido.service';

@Component({
  selector: 'app-hermano-padre',
  templateUrl: './hermano-padre.component.html',
  styleUrls: ['./hermano-padre.component.css']
})
export class HermanoPadreComponent implements OnInit{
  textoDelServicio: string = "";

  constructor(private _servicioCompartido: ServicioCompartidoService) {}

  ngOnInit(): void {
    this.textoDelServicio = this._servicioCompartido.getTextoCompartido();
  }

}
