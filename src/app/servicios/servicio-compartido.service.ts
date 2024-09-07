import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioCompartidoService {

  private textoCompartido : string = "Hola, desde el servicio";

  constructor() { 

  }

  getTextoCompartido() : string {
    return this.textoCompartido || "";
  }

  setTextoCompartido(texto : string) {
    this.textoCompartido = texto;
  }
}
