import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  estaLogueado : boolean = true;
  cargando : boolean = true;
  tipoUsuario : string = 'trabajador';

  listaFrutas : string[] = [
    'Platano',
    'Manzana',
    'Uva',
    'Mandarina'
  ];

  ngOnInit(): void {
    setTimeout(() => {
      this.cargando = false;
    }, 3000)
  }
}
