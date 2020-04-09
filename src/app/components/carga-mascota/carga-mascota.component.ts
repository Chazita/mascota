import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Mascota } from '../../class/mascota';

@Component({
  selector: 'app-carga-mascota',
  templateUrl: './carga-mascota.component.html',
  styleUrls: ['./carga-mascota.component.css']
})

export class CargaMascotaComponent implements OnInit {
  @Input('mascotas') mascotas: Mascota[];
  @Output() agregar: EventEmitter<Mascota[]> = new EventEmitter<Mascota[]>();

  mascotaForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.mascotaForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      foto: ['', Validators.compose([Validators.maxLength(1000), Validators.required])],
      tipo: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  sendMascota() {
    let objMascota = new Mascota(this.mascotaForm.value.nombre, this.mascotaForm.value.foto, this.mascotaForm.value.tipo);
    this.mascotas.push(objMascota);
    this.agregar.emit(this.mascotas);
  }

}
