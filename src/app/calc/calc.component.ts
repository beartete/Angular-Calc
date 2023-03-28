import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
  //Atributos da classe/componente
  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;

  somar() {
    this.resultado = this.num1 + this.num2;
  }

  subtrair() {
    this.resultado = this.num1 - this.num2;
  }

  multiplicar() {
    this.resultado = this.num1 * this.num2;
  }

  dividir() {
    if (this.num2 !== 0) {
      this.resultado = this.num1 / this.num2;
    } else {
      alert('Não é possível dividir por zero!');
    }
  }

  zerar() {
    this.num1 = 0;
    this.num2 = 0;
    this.resultado = 0;
  }
}
