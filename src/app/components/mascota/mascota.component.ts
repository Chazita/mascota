import { Component, OnInit, Input } from '@angular/core';
import { Mascota } from '../../class/mascota';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {

  @Input('mascota') mascota: any;

  constructor() { }

  ngOnInit(): void {
  }

}
