import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {
  w:any;
  material:any;
  products: any;
  category: any;
  productId: any;
  quantity: any;
  productsOrder:any = [];
  model:any;
  orderProduction: any;
  idProduction: any;
  categoryName:any;
  constructor(private _w: WebsocketService) { 
    this.category = "";
    this.loadMaterial();
    this.w = Math.round(window.innerHeight * .95);
    this.loadProducts();
    this.init();
    this.loadOrderProduction();
  }

  ngOnInit() {
  }
  loadId(id:any){
    this.idProduction = id;
    console.log(this.idProduction);
  }

  init(){
    this.model={
      producedBy: "",
      comments: "",
      folioFiscal: "",
      CC: "",
      bank: "",
      material: this.productsOrder,
      id: this.idProduction
    }
  }

  

  save(){
    this.material.forEach( element => {
      if (element.category === this.category){
        console.log(element.name);
      }
    });
    console.log(this.model);
    this.model.id = this.idProduction;
    this._w.emit("editOrderProduction",this.model,(res)=>{
      swal({
        title: res.status+"!",
        text: res.obj,
        icon: res.ok
      })
      this.init();
      console.log(res);
      this.productsOrder = "";
    });
  }

  loadMaterial(){    
    this._w.emit("getMaterials","",(res)=>{      
      this.material = res.obj;
      console.log(this.material);
    })
  }
 

  loadOrderProduction(){
    let filters = {
      "shopping": false
    }
    this._w.emit("getOrderProduction",{filters}, (res)=>{
      this.orderProduction = res.obj;
      console.log(this.orderProduction);
    });
  }

  addProduct(){
    let obj = {
      "category": this.category,
      "name": this.categoryName,
      "quantity": this.quantity
    }
    this.productsOrder.push(obj);
    this.category = "";
    this.quantity = "";
    console.log(this.productsOrder);
  }

  loadProducts(){
   /*  console.log(this.category);
    let filters = {
      "category": this.category
    }
    console.log(filters);
    this._w.emit("getProduct",{filters}, async (res)=>{
      
      this.products = await res.obj;
      console.log('esto es lo que trae',this.products);
    }); */
    let filters = {
      "_id": this.category
    }
    console.log(filters);
    this._w.emit("getMaterials",{filters}, async (res)=>{
      
      this.products = await res.obj;
      this.categoryName = this.products[0].name;
      console.log('esto es lo que trae',this.products[0].name);
    })
  }

}
