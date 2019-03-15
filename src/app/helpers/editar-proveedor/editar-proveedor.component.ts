import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-editar-proveedor',
  templateUrl: './editar-proveedor.component.html',
  styleUrls: ['./editar-proveedor.component.css']
})
export class EditarProveedorComponent implements OnInit {
  forma: FormGroup;
  productos: any = [];
  constructor() { }

  ngOnInit() {
    this.forma = new FormGroup({
      rasonSocial: new FormControl(null, Validators.required),
      rfc: new FormControl(null, Validators.required),
      representanteLegal: new FormControl(null, Validators.required),
      contacto: new FormControl(null, Validators.required),
      direccion: new FormControl(null, Validators.required),
      telefono: new FormControl(null, Validators.required),
      correo: new FormControl(null, Validators.required),
      tipoAdquisicion: new FormControl(null, Validators.required),
      diasCredito: new FormControl(null, Validators.required),
      nombre: new FormControl(null),
      descripcion: new FormControl(null),
      capacidad: new FormControl(null)
    });

  }

}
