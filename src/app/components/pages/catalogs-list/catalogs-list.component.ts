import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/web-socket.service';
import swal from 'sweetalert';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-catalogs-list',
  templateUrl: './catalogs-list.component.html',
  styleUrls: ['./catalogs-list.component.css'],
  providers: [WebsocketService]
})
export class CatalogsListComponent implements OnInit {

  model: any;
  catalogue: any;
  datas: Observable<any>;
  idCatalogue:any;
  nameCat: any;
  ok:any=false;
  constructor(private _w: WebsocketService, 
    private route: ActivatedRoute, 
    private router: Router) { 
      this.getParams();
      this.getCatalogue();
      this.getElements(); 
      this.init();
      this.reload();
    }

  ngOnInit() {
    this.reload();
  }
  async reload(){
    await this._w.listen("reloadElement").subscribe(()=>{
      this.getElements();
    });
  }
  //inicializar elementos
  init(){
    this.model = {
      idCatalogue: this.idCatalogue,
      name:"",
      discount:"",
      image:"",
      value:"",
      currency:""
    }
    this.catalogue = {
      _id: "",
      name: "",
      element_name:false,
      element_discount:false,
      element_image:false,
      element_value:false,
      element_currency:false
    }
  }
  ///obtener el id enviado por la url
  async getParams(){
    await this.route.params.subscribe((params:Params)=>{
      this.idCatalogue = params.id;
      console.log(this.idCatalogue);
    });
  }
  ///cargar datos del catalogo
  async getCatalogue(){
    await this._w.emit("catalogueById", this.idCatalogue, (res)=>{
      this.catalogue = {
        _id: res.catalogueOne._id,
        name: res.catalogueOne.name,
        element_name: res.catalogueOne.element_name,
        element_discount: res.catalogueOne.element_discount,
        element_image: res.catalogueOne.element_image,
        element_value: res.catalogueOne.element_value,
        element_currency: res.catalogueOne.element_currency
      };
      this.nameCat = res.catalogueOne.name;
      console.log(this.catalogue);
    });
  }
  ///guardar Datos de los elementos
  async save(){
    console.log(this.model);
    if(this.model._id === "" || this.model._id === null){
      await this._w.emit("elementCatalogue",this.model,(res)=>{
        document.getElementById('close-btn').click();      
        this.ok = true;
        swal({
          title: "Exito!",
          text: res.mensaje,
          icon: "success",
        });
        this.getElements();             
      });
      if(this.ok === false){
        swal({
          title: "Error!",
          text: "Error al guardar",
          icon: "warning",
        });
      }
    }else{
      this._w.emit("updateElement",this.model,(res)=>{
        document.getElementById('close-btn').click();
        swal({
          title: "Exito!",
          text: "Actualizado Correctamente",
          icon: "success",
        });
      });
    }
    
  }
  ///cargar los elementos cargados al catalogo
  async getElements(){
    await this._w.emit("elementById",this.idCatalogue,(res)=>{
      this.datas = res.element;
      console.log(this.datas);
    });
  }

  async delete(_id: any){
    swal({
      title: "¿Estas Seguro de eliminar?",
      text: "Esta apunto de eliminar una elemento de la categoria",
      icon: "warning",
      buttons: {
        cancel: { text: 'Cancelar' },
        confirm: { text: 'Confirmar' },
      },
      dangerMode: true
    })
.then((willDelete) => {
      if (willDelete) {
        this._w.emit("removeElement",_id,(res)=>{
          swal("Eliminado correctamente!", {
            icon: "success",
          });
        });        
      } else {
        swal("Cancelado!");
      }
    });
  }

  async updateElement(data: any){
    this.model = data;    
  }

}
