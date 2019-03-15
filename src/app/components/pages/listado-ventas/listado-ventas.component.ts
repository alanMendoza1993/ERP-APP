import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-listado-ventas',
  templateUrl: './listado-ventas.component.html',
  styleUrls: ['./listado-ventas.component.css']
})
export class ListadoVentasComponent implements OnInit {
  datas:any;
  constructor(private _w: WebsocketService) { 
    this.loadData();
  }

  loadData(){
    this._w.emit("getOrderProduction","", (res)=>{
      this.datas = res.obj;
      console.log(this.datas);
    });
  }

  ngOnInit() {
  }

}
