import { Component } from '@angular/core';
import { Mascota } from './class/mascota';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mascota';
  mascotas: Mascota[] = [];
  mascotaMostrar: Mascota = new Mascota("", "", "");

  updateMascotas(ev: any) {
    this.mascotas = ev;
  }

  mostrar(ev: any) {
    this.mascotaMostrar = ev;
  }
}
