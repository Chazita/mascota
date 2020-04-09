import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mascota } from '../../class/mascota';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  @Input('data') mascotas;
  @Output() mostrar: EventEmitter<Mascota> = new EventEmitter<Mascota>();
  constructor() { }

  ngOnInit(): void {
  }

  sendMascota(mascota: any) {
    let objMascota = new Mascota(mascota.nombre, mascota.pathFoto, mascota.tipo);
    this.mostrar.emit(objMascota);
  }

}
