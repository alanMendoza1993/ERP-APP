import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-orden',
  templateUrl: './crear-orden.component.html',
  styleUrls: ['./crear-orden.component.css']
})
export class CrearOrdenComponent implements OnInit {
  forma: FormGroup;
  w : number;
  constructor() { 
    this.w = Math.round(window.innerHeight * .90);
    console.log(this.w);
  }

  ngOnInit() {


    this.forma = new FormGroup ({
      noPedido:  new FormControl(null, Validators.required),
      fecha: new FormControl( new Date().toISOString().slice(), Validators.required),
      ubicacion: new FormControl(null, Validators.required),
      noOrden: new FormControl(null, Validators.required),
      cliente: new FormControl(null, Validators.required),
      articulo: new FormControl(null, Validators.required),
      ordenCompra: new FormControl(null, Validators.required),
      fechaEntrega: new FormControl(null, Validators.required),
      nota: new FormControl(null, Validators.required),
      claveInterna: new FormControl(null, Validators.required),
      cantidadOrdenada: new FormControl(null, Validators.required),
      ancho: new FormControl(null, Validators.required),
      largo: new FormControl(null, Validators.required),
      formas: new FormControl(null, Validators.required),
      tiraje: new FormControl(null, Validators.required),
      kilos: new FormControl(null, Validators.required),
      noPlano: new FormControl(null, Validators.required),
      familia: new FormControl(null, Validators.required),
      calibre: new FormControl(null, Validators.required),
      fechaCompromiso: new FormControl(null, Validators.required),
      requiereCorte: new FormControl(null),
      cantidadProducir: new FormControl(null, Validators.required)
    });
  }

  crearOrden() {
    console.log(this.forma);
  }

}
