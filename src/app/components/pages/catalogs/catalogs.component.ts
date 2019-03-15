import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/web-socket.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.css'],
  providers: [WebsocketService]
})
export class CatalogsComponent implements OnInit {
  model:any;
  datas: any;
  ok:any=false;
  constructor(private _w: WebsocketService) { 
    this.init();
    this.loadData();
  }

  ngOnInit() {
    this.reload();
  }

  init(){
    this.model = {
      _id: "",
      name: "",
      element_name:false,
      element_discount:false,
      element_image:false,
      element_value:false,
      element_currency:false
    }
  }

  async reload(){
    await this._w.listen("reloadCatalogue").subscribe(()=>{
      this.loadData();
    });
  }

  loadData(){
    this._w.emit("load","catalogue", (res)=>{
      this.datas = res.obj;
    })
  }

 async save(){
   console.log(this.model);
    if(this.model._id === "" || this.model._id === null){
      await this._w.emit("createCatalogue", this.model, (res)=>{
        this.loadData();
        document.getElementById('close-btn').click();
        this.init();
        this.ok = true;
        swal({
          title: "Exito!",
          text: res.mensaje,
          icon: "success",
        });
      });
      if(this.ok === false){
        swal({
          title: "Error!",
          text: "Error al guardar, Intente de nuevo",
          icon: "warning",
        });
      }
    }else{
      await this._w.emit("updateCatalogue", this.model, (res)=>{
        document.getElementById('close-btn').click();
        swal({
          title: "Exito!",
          text: "Actualizado Correctamente",
          icon: "success",
        });

      });      
    }
    

  }
  ////eliminar el catalogo
  async delete(_id:any){
    console.log(_id);
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
       this._w.emit("removeCatalogue",_id, (res)=>{
          swal("Eliminado correctamente!", {
            icon: "success",
          });
        });        
      } else {
        swal("Cancelado!");
      }
    });
  }

  async updateCatalogue(data: any){
    this.model = data;
    console.log(this.model);
  }

}
