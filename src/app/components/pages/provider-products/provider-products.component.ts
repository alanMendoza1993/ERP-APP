import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/web-socket.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-provider-products',
  templateUrl: './provider-products.component.html',
  styleUrls: ['./provider-products.component.css']
})
export class ProviderProductsComponent implements OnInit {
  model:any;
  idPro: any;
  datas:any
  w:any;
  material:any;
  constructor(private _w: WebsocketService, public route: ActivatedRoute, private router: Router) { 
    this.w = Math.round(window.innerHeight * .95);
    this.getParams();
    this.init();
    this.loadData();
    this.loadMaterial();
  }
  getParams(){
    this.route.params.subscribe((params:any)=>{
      this.idPro = params.id;
      console.log(this.idPro);
    });
  }

  init(){
    this.model = {
      ID: "",
      noProduct: "",
      code: "",
      title: "",
      sku: "",
      waitTime: "",
      volume: "",
      weight: "",
      rode: "",
      ivaType: "",
      currency: "",
      type: "",
      typeBuy: "",
      costing: "",
      IEPS: "",
      IEPStype: "",
      unitSize: "",
      category: null,
      price: "",
      description: "",
      production: "",
      cdfi: "",
      cfdiU: "",
      providerId: this.idPro
    }
  }

  loadData(){
    console.log(this.idPro);
    let obj;
    let filters = {
      "providerId": /* '5c6af6b52592c448c81813d0'  */this.idPro
    }
    console.log(filters);
    this._w.emit("getProduct",{filters}, async (res)=>{
      
      this.datas = await res.obj;
      console.log('esto es lo que trae',this.datas);
    });
  }

  loadMaterial(){
    this._w.emit("getMaterials","",(res)=>{      
      this.material = res.obj;
      console.log(this.material);
    })
  }

  save(){
    console.log(this.idPro);
    console.log(this.model);
    this._w.emit("createProduct",this.model,(res)=>{
      swal({
        title: "Exito!",
        text: res.mensaje,
        icon: "success",
      })
      this.init();
      console.log(res);
      this.getParams();
      this.loadData();
      this.loadMaterial();
    });
  }

  delete(_id){
    swal({
      title: "¿Estas Seguro de eliminar?",
      text: "Esta apunto de eliminar un producto",
      icon: "warning",
      buttons: {
        cancel: { text: 'Cancelar' },
        confirm: { text: 'Confirmar' },
      },
      dangerMode: true
    })
.then((willDelete) => {
      if (willDelete) {
       this._w.emit("deleteProduct",_id, (res)=>{
          swal("Eliminado correctamente!", {
            icon: "success",
          });
        });        
      } else {
        swal("Cancelado!");
      }
    });
    this.getParams();
      this.loadData();
      this.loadMaterial();
  }
  ngOnInit() {
  }

}
