import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DevChuva';
  mostrarTexto: boolean = false;

  verMais() {
    this.mostrarTexto = !this.mostrarTexto;
  }
}
