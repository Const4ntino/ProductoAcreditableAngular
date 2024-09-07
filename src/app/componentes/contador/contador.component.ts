import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  contadorNros: number = 0;

  incrementar() : void{
    this.contadorNros++;
  }
  decrementar() : void{
    this.contadorNros--;
  }
}
