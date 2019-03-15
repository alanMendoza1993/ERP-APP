import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recepcion-mercancia',
  templateUrl: './recepcion-mercancia.component.html',
  styleUrls: ['./recepcion-mercancia.component.css']
})
export class RecepcionMercanciaComponent implements OnInit {
fecha : Date;
pageReady: boolean = false;
desglosada: string;
w : number;
  constructor() { 
    
    this.w = Math.round(window.innerHeight * .95);
    this.fecha = new Date();
    this.desglosada = this.fecha.getDate() + '/' + (this.fecha.getMonth()+1) + '/' + this.fecha.getFullYear();
    console.log(this.desglosada);
    var ready = setInterval(() => {
      if (document.readyState === 'complete') {
        this.pageReady = true;
        clearInterval(ready);

      }
    },1000);
  }

  

  ngOnInit() {
  }

}
