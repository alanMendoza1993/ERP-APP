import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-internal-products',
  templateUrl: './internal-products.component.html',
  styleUrls: ['./internal-products.component.css']
})
export class InternalProductsComponent implements OnInit {
 model:any;
 material:any;
 materialsInt:any = [];
 materialId:any;
 nameMaterial: any;
 quantityMaterial:any;
 internalProducts:any;

  constructor(private _w: WebsocketService) { 
    this.init();
    this.loadMaterial();
    this.loadInternalProducts();
  }

  ngOnInit() {
  }

  init(){
    this.model={
      name: "",
      description: "",
      long: false,
      high: false,
      width: false,
      thickness: false,
      size: false,
      quantity: false,
      parallel: false,
      cover: false,
      molding: false, 
      accessories: false,
      caliber: false,
      install: false
    }
    /* this.materialsInt = []; */
  }
  loadMaterial(){
    this._w.emit("getMaterials","",(res)=>{   
      this.material = res.obj;
    })
  }
  loadNameProduct(){
    let filters = {
      _id: this.materialId
    };
    this._w.emit("getMaterials",{filters},(res)=>{  
      this.nameMaterial = res.obj[0].name; 
    })
  }
  addMaterial(){
    let obj = {
      materia: this.materialId,
      name: this.nameMaterial
    }
    console.log(obj);
    this.materialsInt.push(obj);
    console.log(this.materialsInt);
    this.materialId = "";
    this.nameMaterial = "";
    this.quantityMaterial = "";
  }
  loadInternalProducts(){
    this._w.emit("getProductInt","",(res)=>{          
      this.internalProducts = res.obj;
      console.log(this.internalProducts);        
    });
  }
  save(){
    console.log(this.model);
    this._w.emit("createProductInt", this.model,(res)=>{
      swal({
        title: "Exito!",
        text: res.mensaje,
        icon: "success",
      })
      this.init();
      this.loadMaterial();
      this.loadInternalProducts();
    });
  }
  delete(_id){
    swal({
      title: "¿Estas Seguro de eliminar?",
      text: "Esta apunto de eliminar un producto interno",
      icon: "warning",
      buttons: {
        cancel: { text: 'Cancelar' },
        confirm: { text: 'Confirmar' },
      },
      dangerMode: true
    })
.then((willDelete) => {
      if (willDelete) {
       this._w.emit("deleteProductInt",_id, (res)=>{
          swal("Eliminado correctamente!", {
            icon: "success",
          });
        });        
      } else {
        swal("Cancelado!");
      }
    });
    this.init();
      this.loadMaterial();
      this.loadInternalProducts();
  }

}
