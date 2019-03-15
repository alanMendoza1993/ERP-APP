import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, EmailValidator } from '@angular/forms';
import { WebsocketService } from 'src/app/services/web-socket.service';
import swal from 'sweetalert';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { providerDef } from '@angular/core/src/view';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {
forma: FormGroup;
servicioForm: FormGroup;
productoForm: FormGroup;
otroForm: FormGroup;
productos: any = [];
servicios: any = [];
otro: any = [];
idPro: any;
email: any;
w : number;
searchPro:any;
view: number = 1;
accountProvider: any= {
  RazonSocial: null,
  _id: null
}
proveedores:any;
  constructor(private _w: WebsocketService, public router: Router) {
    this.w = Math.round(window.innerHeight * .95);
    this.getProviders();
  }

  ngOnInit() {
    /* this.otroForm= new FormGroup({
      name: new FormControl(null),
      unitSize: new FormControl(null),
      minPursachase: new FormControl(null),
      material_id: new FormControl(null),
      ID: new FormControl(null),
      noProduct: new FormControl(null),
      code: new FormControl(null),
      vol: new FormControl(null),
      weight: new FormControl(null),
      price: new FormControl(null),
      iva: new FormControl(null),
      MN: new FormControl(null),
      IEPS: new FormControl(null),
      type: new FormControl(null),
      fdi: new FormControl(null),
      fdiU: new FormControl(null),
      description: new FormControl(null),
      capacity: new FormControl(null),
      time: new FormControl(null),
      acquisition: new FormControl(null),
      day : new FormControl(null)
    });
    this.servicioForm= new FormGroup({
      name: new FormControl(null),
      unitSize: new FormControl(null),
      minPursachase: new FormControl(null),
      material_id: new FormControl(null),
      ID: new FormControl(null),
      noProduct: new FormControl(null),
      code: new FormControl(null),
      vol: new FormControl(null),
      weight: new FormControl(null),
      price: new FormControl(null),
      iva: new FormControl(null),
      MN: new FormControl(null),
      IEPS: new FormControl(null),
      type: new FormControl(null),
      fdi: new FormControl(null),
      fdiU: new FormControl(null),
      description: new FormControl(null),
      capacity: new FormControl(null),
      time: new FormControl(null),
      acquisition: new FormControl(null),
      day : new FormControl(null)
    });
    this.productoForm= new FormGroup({
      name: new FormControl(null),
      unitSize: new FormControl(null),
      minPursachase: new FormControl(null),
      material_id: new FormControl(null),
      ID: new FormControl(null),
      noProduct: new FormControl(null),
      code: new FormControl(null),
      vol: new FormControl(null),
      weight: new FormControl(null),
      price: new FormControl(null),
      iva: new FormControl(null),
      MN: new FormControl(null),
      IEPS: new FormControl(null),
      type: new FormControl(null),
      fdi: new FormControl(null),
      fdiU: new FormControl(null),
      description: new FormControl(null),
      capacity: new FormControl(null),
      time: new FormControl(null),
      acquisition: new FormControl(null),
      day : new FormControl(null)
    }); */
    this.forma = new FormGroup({
      comercialName: new FormControl(null, Validators.required),
      bussinesName: new FormControl(null, Validators.required),
      RFC: new FormControl(null, Validators.required),
      legalRepresentative: new FormControl(null, Validators.required),
      contact: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      acquisition: new FormControl(null, Validators.required),
      creditDay: new FormControl(null, Validators.required),
      street: new FormControl(null, Validators.required),
      IntExt: new FormControl(null, Validators.required),
      NoExt: new FormControl(null, Validators.required),
      colony: new FormControl(null, Validators.required),
      CP: new FormControl(null, Validators.required),
      location: new FormControl(null, Validators.required),
      state: new FormControl(null, Validators.required),
      country: new FormControl(null, Validators.required),
      branch: new FormControl(null, Validators.required),
      bank: new FormControl(null, Validators.required),
      key_account: new FormControl(null, Validators.required),
      credit: new FormControl(null, Validators.required)
    });

  }
  guardar() {
    console.log(this.forma.value);
    this._w.emit("createProvider", this.forma.value,(res)=>{
      swal({
        title: "Exito!",
        text: res.mensaje,
        icon: "success",
      });
      
      this.idPro = res.idProvider;
      console.log("id2:",this.idPro);
    console.log("id:",this.idPro);
    this.getProviders();
    /* this.router.navigate(['config/providers/products/'+this.idPro]); */
    });
    
    
    
  }
  providerAccount(provider){
    console.log('proveedor: ',provider);
    this.accountProvider = provider;
  }

  save(){
    let obj = {
      email: this.email,
      providerId: this.accountProvider._id,
    }
    console.log(this.email);
    if(this.view == 1 && this.email != null){
      console.log('ejecutando el view 1');
      this._w.emit("addAccount",obj, (res)=>{
        console.log(res);
        if (res.ok === 'Exito') swal("Añadido Correctamente!", {
          icon: "success",
        });
        if (res.ok === 'warning') swal("Esa Cuenta ya esta Registrada!", {
          icon: "warning",
        });
        
        this.email = null;
      }); 
    }

  }
  deleteProvider(_id){
    swal({
      title: "¿Estas Seguro de eliminar?",
      text: "Esta apunto de eliminar un proveerdor",
      icon: "warning",
      buttons: {
        cancel: { text: 'Cancelar' },
        confirm: { text: 'Confirmar' },
      },
      dangerMode: true
    })
.then((willDelete) => {
      if (willDelete) {
       this._w.emit("deleteProvider",_id, (res)=>{
          swal("Eliminado correctamente!", {
            icon: "success",
          });
        });        
      } else {
        swal("Cancelado!");
      }
    });
    this.getProviders();
  }
  getProviders(){
    let desde = 0;
    let filters = {
      "desde":desde,
      "limit": 50
    }
    this._w.emit("getProvider",filters, (res)=>{
      this.proveedores = res.obj;
      console.log(this.proveedores);
    });
  }
  search(){
    let filters = {
      comercialName:{'$regex': this.searchPro}
    }
    console.log(filters);
    this._w.emit("getProvider",{filters}, (res)=>{
      this.proveedores = res.obj;
      console.log(this.proveedores);
    });
  }

  /* guardarProducto() {
    let ppg = {
      name: this.productoForm.value.name,
      unitSize: this.productoForm.value.unitSize,
      minPursachase: this.productoForm.value.minPursachase,
      material_id: this.productoForm.value.material_id,
      ID: this.productoForm.value.ID,
      noProduct: this.productoForm.value.noProduct,
      code: this.productoForm.value.code,
      vol: this.productoForm.value.vol,
      weight: this.productoForm.value.weight,
      price: this.productoForm.value.price,
      iva: this.productoForm.value.iva,
      MN: this.productoForm.value.MN,
      IEPS: this.productoForm.value.IEPS,
      type: this.productoForm.value.type,
      fdi: this.productoForm.value.fdi,
      fdiU: this.productoForm.value.fdiU,
      description: this.productoForm.value.description,
      capacity: this.productoForm.value.capacity,
      time: this.productoForm.value.time,
      day: this.productoForm.value.day,
      acquisition: this.forma.value.acquisition,
      providerId: this.idPro
    };
    this.productos.push(ppg);
    console.log(ppg);
    this._w.emit("createProduct",ppg,(res)=>{
      console.log(res);
    });
    this.productoForm.reset();

  }
  guardarServicio() {
    let ppg = {
      name: this.servicioForm.value.name,
      description: this.servicioForm.value.description,
      capacity: this.servicioForm.value.capacity,
      time: this.servicioForm.value.time,
      day: this.servicioForm.value.day,
      acquisition: this.forma.value.acquisition,
      providerId: this.idPro
    };
    this.servicios.push(ppg);
    console.log(ppg);
    this._w.emit("createProduct",ppg,(res)=>{
      console.log(res);
    });

    this.servicioForm.reset();

  }
  guardarOtro() {
    let ppg = {
      name: this.otroForm.value.name,
      description: this.otroForm.value.description,
      capacity: this.otroForm.value.capacity,
      time: this.otroForm.value.time,
      day: this.otroForm.value.day,
      acquisition: this.forma.value.acquisition,
      providerId: this.idPro
    };
    this.otro.push(ppg);
    this.otroForm.reset();
    console.log(ppg);
    this._w.emit("createProduct",ppg,(res)=>{
      console.log(res);
    });

  }


  borrar(idx: number, tipo: string) {
    if(tipo === 'otro'){
      this.otro.splice(idx, 1);
    }
    if (tipo === 'servicio') {
      this.servicios.splice(idx, 1);
    } else {
      this.productos.splice(idx, 1);
    }
    
    console.log(idx);
  } */

}
