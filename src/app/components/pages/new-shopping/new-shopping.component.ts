import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { WebsocketService } from 'src/app/services/web-socket.service';
import { Form, NgForm } from '@angular/forms';
import { forEach } from '@angular/router/src/utils/collection';
@Component({
  selector: 'app-new-shopping',
  templateUrl: './new-shopping.component.html',
  styleUrls: ['./new-shopping.component.css']
})
export class NewShoppingComponent implements OnInit {
  w: Number;
  orderProduction: any;
  model:any;
  //Mostrar modal de bootstrap
  showmodal: boolean = true;
  providers:any;
  products:any;
  ciclo: boolean = false;
  f: Form;
  providerCalc: any[] = [];

  indexRes: number;
  validacion: boolean;
  cuentaMaterial: string;
  cuentaCantidad: number;
  cuentaCantidadRes: number;
  cuentaPrice: number;
  cuentaRes: number = 0;
  cuenta: any[] = [];
  cuentaMostrar: any[] = [];
  providersCompare: any[]= [];
  total: number[];
  totalOc: number= 0;
  totalMv: number= 0;
  nuevaFecha = new Date(new Date().setDate(new Date().getDate() + 5)).getTime();
  redFecha = new Date(new Date().setDate(new Date().getDate() + 2)).getTime();
  dateInit:any= new Date().toISOString();
  dateEnd:any= new Date().toISOString();
  p: any[][]; 
  oc: any[];
  constructor(private _w: WebsocketService) { 
	this.w = Math.round(window.innerHeight * .95);
	this.loadOrderProduction();
  this.loadProvider();
  }



  ngOnInit() {
	  this.model = {
      name: "",
      description: ""
    };
  }
 
  async datos(material:any, i){
    this.cuentaCantidad = 0;
    this.cuentaRes = 0;
    this.indexRes = i;
    this.cuentaMaterial = material.name;
    this.cuentaCantidad = material.quantity;
    this.cuentaPrice = material.price;
    console.log('el material: ', material);
    let filters = {
      'category': material.id
    }
    await this._w.emit("getProductsProvider",{filters},(res)=>{
      this.providersCompare = res.obj;
       console.log('lista de proveedores',this.providersCompare);
     });
  
    
  }

  totalM(total: number, iva: number, i:number){
    this.providerCalc[i].totalM = ((total*iva)/100)+total;

  }
  loadDates(){
    let end = new Date(this.dateEnd);
     end.setDate(end.getDate()+1);
    let filters = {
      dateFinish:{
        '$gte': new Date(this.dateInit).toISOString(),
        '$lt': end.toISOString()
        }
    };
    console.log(filters);
    this._w.emit("getSalesProyect",{filters},(res)=>{
      this.orderProduction = res.obj;
      this.orderProduction.forEach(element => {
        element.orderProductionId.dateFinish = new Date(element.orderProductionId.dateFinish).getTime();
      });
      console.log(this.orderProduction);
    });
  }
  vizualizarOc(){
    this.totalOc = 0;
    this.providerCalc = [];
    this.cuentaMostrar = this.cuenta;
    this.cuentaMostrar.forEach( element => {
      let ocNew: any;
      console.log('material ####',element);
      
      element.provider.forEach( prov => {
        console.log('providers   #### ', prov);
        
        ocNew = {
          providerName: prov.name,
          provedorMateriales: [{material:element.id, name: element.name,  quantity:prov.many, price: prov.price, total: prov.many * prov.price}],
          providerId: prov._id,
          total: prov.many * prov.price,
          totalM: prov.many * prov.price,

        };
        this.totalOc += (prov.many * prov.price);
        
        if (this.providerCalc.length != 0){
          let ya = true;
          var index= 0;
          this.providerCalc.forEach( pro  =>{
            index += 1;
            console.log(this.providerCalc.length, index, this.providerCalc.length === index);
            if( pro.providerId === prov._id) {
              
              console.log('entrando a el mimso id', pro.providerId, 'y ', prov._id);
              pro.total += (prov.many * prov.price);
              pro.totalM += (prov.many * prov.price);

              pro.provedorMateriales.push({material:element.id, name: element.name, quantity:prov.many, price: prov.price, total: prov.many * prov.price});
              ya= false;
            } else {
              if (ya && (this.providerCalc.length == index)){
              console.log('entrando a Diferente', pro.providerId, 'y ', prov._id);
             
              this.providerCalc.push(ocNew);
              console.log(this.providerCalc);
            
            }}
            
          });
        }else {
          console.log('el length es entrando a nullo ', this.providerCalc);
            this.providerCalc.push(ocNew);
          }
      });
      
    });
    this.oc = [{
      provedorName: '',
      provedorProductos: ''
    }];
    console.log('creando ordenes de compra', this.providerCalc);
    this.providerCalc.forEach( element => {
      
      console.log('imprimir element material  ################', element)
      this.totalMv+= element.totalM;

    });
  }
  loadOrderProduction(){
	 let filters = {
    "oc": false,
  } 
 
	this._w.emit("getSalesProyect",{filters}, (res)=>{
    this.orderProduction = res.obj;
    this.orderProduction.forEach(element => {
      element.orderProductionId.dateFinish = new Date(element.orderProductionId.dateFinish).getTime();
    });
	  console.log('ordenes de production ',this.orderProduction);
	});
  }
  addProvider(material){
/* 	  console.log("Abriendo proveedor", material);
 */  		this.showmodal = false;
  }

  validMax(max: number, i, i2){
    if (     this.orderProduction[i].materials[i2].enviar > max      ){
      this.orderProduction[i].materials[i2].enviar = max;
    }
  }
  validMaxCompare(max: number, i, i2){
    if (     this.orderProduction[i].materials[i2].enviar > max      ){
      this.orderProduction[i].materials[i2].enviar = max;
    }
  }

  changeTotal(i:number){
    this.providerCalc[i].total = 0;
    this.providerCalc[i].provedorMateriales.forEach( element => {
      this.providerCalc[i].total += (element.price * element.quantity); 
      
    });
    
    this.totalOc = 0;
    this.totalMv = 0;
    this.providerCalc.forEach( element => {
      
      console.log('imprimir element material  ################', element)
      this.totalMv+= element.totalM;

      this.totalOc +=element.total;
    });
  }

  restCant(cant, i){
/*     console.log('cantidad ',cant);
    console.log('index ', i); */
    
/*     this.indexRes = i;
 */    
      if ( (cant + this.cuentaRes) <= this.cuentaCantidad) {
        this.cuentaRes = 0;
        this.providersCompare.forEach( element => {
        if (element.many) this.cuentaRes += element.many;
      });
      } else {
        if((this.cuentaCantidad - (cant + this.cuentaRes))>=0) {this.providersCompare[i].many += (this.cuentaCantidad - (cant + this.cuentaRes));}
        else {
          this.providersCompare[i].many = 0;
        }
                   
      }
    
/*     this.cuentaRes = cant;
 *//*     this.cuentaCantidad -= cant;
 */  }

 saveOc(){

  console.log('##############POR ENVIAR########', this.providerCalc);

  
  console.log(this.orderProduction);
  console.log("orden::::::",this.providerCalc);
    
   this._w.emit("createOrdersBuy",{data: this.providerCalc, subTotal: this.totalOc, total: this.totalMv },(res)=>{
/*     this.providersCompare = res.obj; esteeeeeeeeeeeeeee esssssssssssss el pedddooooooooooooo
 */    this.cuenta = [];
      console.log(res);
     this._w.emit("trueOrderProduction",this.orderProduction,(res)=>{
      console.log('esta es la orden',this.orderProduction);
      console.log('esta es la respuesta%%%%%%%%%%%%%%%',res);
     
  
    });
    swal({
      title: "Exito"+"!",
      text: res.obj,
      icon: "success"
    });
    
    this.loadOrderProduction();
      
    });

 }
 saveProviders(){
   // restar cuentaRes a la cantidad pendiente en los elementos de la cuenta
   // y verificando que sea el elemento seleccionado en la funcion resCant
console.log('el index de la ceunta es ', this.indexRes);
if (this.cuentaRes === this.cuenta[this.indexRes].pending){
  /* console.log('cuentares ', this.cuentaRes);
  console.log('Index res ', this.cuenta[this.indexRes]); */
  this.providersCompare.forEach( element => {

    if(element.many > 0){
      console.log('imprimiendo proveedor aceptado con: ', element.many);
    let obj = {
      _id: element.providerId._id,
      name: element.providerId.RazonSocial,
      price: element.price,
      many: element.many
    }
    this.cuenta[this.indexRes].provider.push(obj);
  }
  });
  this.cuenta[this.indexRes].pending -= this.cuentaRes; 
  console.log('guardado');
  document.getElementById('close').click();
  
} else {
  console.log('cuentares ', this.cuentaRes);
  console.log('Index res ', this.cuenta[this.indexRes]);
  console.log('activa a todos los provedores');
}


 }

  loadProvider(){
	this._w.emit("getProvider","", (res)=>{
		this.providers = res.obj;
		console.log(this.providers);
	  });
  }

  loadIdCategory(id:any,name,f,i,a,form, orders){
    if(f){
  console.log('orders ====== ',orders, id);
  let obj = {
    id: id,
    name: name,
    provider: [],
    quantity: f,
    pending: f,
    data:[{
      orderProductionId: orders.orderProductionId._id,
      cant: f
    }]
  }
  
  
  if(this.cuenta.length != 0){
    this.cuenta.forEach( element => {
      
      if (obj.id === element.id) {
        console.log('el id de la lista',element.id);
        element.quantity += obj.quantity;
        element.pending += obj.quantity;
        element.data.push(obj.data[0]);
        this.ciclo = true;
      }
      

    });
    if (!this.ciclo) {
      this.cuenta.push(obj);
    }
    this.ciclo = false;
  } else {

    this.cuenta.push(obj);
  }
  this.orderProduction[i].materials[a].quantityPending =  this.orderProduction[i].materials[a].quantityPending - f;
  form.resetForm();
  console.log('ide de material ', obj.id);
	let filters = {
		category: obj.id
	}
	this._w.emit("getProducts",{filters}, (res)=>{
		this.products = res.obj;
		console.log(this.products);
	});
  }}
  quitarCuenta(id:any,quantity,quantityPending,i,a){
    console.log(this.cuenta);
    if(this.cuenta.length){
      this.cuenta.forEach( (element, index) => {
        console.log(id,'===', element.id);
        if (id === element.id) {
          console.log('coincideeeeeeeeeeeeeeeeee')
          console.log('el id de la lista',element.id);
          console.log('cantidad total = ',quantity);
          console.log('cantidad Pendiente = ',quantityPending);
          console.log('elementto ceunta = ',element.quantity);
          element.quantity = element.quantity - (quantity-quantityPending);
          element.pending = element.pending - (quantity-quantityPending);
          console.log('elementto ceunta despues = ',element.quantity);
          if(element.quantity === 0) {
            this.cuenta.splice(index,1);
          }
          
        }
        
  
      });
      
      console.log(this.cuenta);

    } else {
  
      return
    }
    this.orderProduction[i].materials[a].quantityPending =  this.orderProduction[i].materials[a].quantity;
  
    let filters = {
      category: id
    }
    this._w.emit("getProducts",{filters}, (res)=>{
      this.products = res.obj;
      console.log(this.products);
    });
    }

    providersFull(){
      this.validacion = false;
      this.cuenta.forEach(element => {
       if(element.pending) {
/*          console.log('element Pending', element.pending);
 */        this.validacion = true;
       }
      });
      if(this.validacion){ 
/*         console.log('segun true ',this.validacion);
 */        return true;
      }
      else{
/*         console.log('segun false ',this.validacion);
 */
        return false;
      }
    }

  addCar(order,material,quantity, name){
    console.log(order, material, quantity, name);
  }

  delete(_id){
    swal({
      title: "¿Estas Seguro de eliminar?",
      text: "Esta apunto de eliminar orden de producion",
      icon: "warning",
      buttons: {
        cancel: { text: 'Cancelar' },
        confirm: { text: 'Confirmar' },
      },
      dangerMode: true
    })
.then((willDelete) => {
      if (willDelete) {
       this._w.emit("deleteOrderProduction",_id, (res)=>{
          swal("Eliminado correctamente!", {
            icon: "success",
          });
        });        
      } else {
        swal("Cancelado!");
      }
    });
    this.loadOrderProduction();
  }
 

}
