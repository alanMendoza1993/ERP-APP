import { Component, OnInit } from '@angular/core';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-orden-compra',
  templateUrl: './orden-compra.component.html',
  styleUrls: ['./orden-compra.component.css']
})
export class OrdenCompraComponent implements OnInit {

  constructor( public router: Router) {
    this.router.navigate(['providers/oc/crearOrden']);
  }

  ngOnInit() {
  }

}
