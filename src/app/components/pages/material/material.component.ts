import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  model:any;
  datas:any;
  products:any;
  constructor(private _w: WebsocketService) { 
    this.init();
    this.loadData();
  }

  ngOnInit() {
  }

  init(){
    this.model = {
      name: "",
      description: ""
    };
  }

  save(){
    console.log(this.model);
    this._w.emit("createMaterial", this.model,(res)=>{
      swal({
        title: "Exito!",
        text: res.mensaje,
        icon: "success",
      })
      this.init();
      this.loadData();
    });
  }

  loadData(){
    this._w.emit("getMaterials","",(res)=>{      
      this.datas = res.obj;
      console.log(this.datas);
    });
  }

  loadProducts(id:any){
    let filters = {
      category: id
    }
    console.log(filters);
    this._w.emit("getProduct",{filters},(res)=>{      
      this.products = res.obj;
      console.log(this.products);
    });
  }
  delete(_id){
    swal({
      title: "¿Estas Seguro de eliminar?",
      text: "Esta apunto de eliminar una categoria",
      icon: "warning",
      buttons: {
        cancel: { text: 'Cancelar' },
        confirm: { text: 'Confirmar' },
      },
      dangerMode: true
    })
  .then((willDelete) => {
        if (willDelete) {
        this._w.emit("deleteMaterial",_id, (res)=>{
            swal("Eliminado correctamente!", {
              icon: "success",
            });
          });        
        } else {
          swal("Cancelado!");
        }
      });
      this.init();
      this.loadData();
  }
}
