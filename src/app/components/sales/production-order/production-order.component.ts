import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-production-order',
  templateUrl: './production-order.component.html',
  styleUrls: ['./production-order.component.css']
})
export class ProductionOrderComponent implements OnInit {
 w : number;
 model:any;
 products:any = [];
 article:any;
 //
 productCant:any = 0;
 productName:any;
 productId:any="";
 
 //
 category: any;
 categoryName:any;
 material:any;
 internalProducts:any;
 //
 materialsProduct:any=[];
 productsInternal:any;
  //
 productsInt:any = [];
 productCant2:any = 0;
 productName2:any;
 productId2:any="";
 productsLoad:any;
 productInt:any;
 modelInt:any;
 nameProduct:any;
 
  constructor(private _w: WebsocketService) { 
    this.w = Math.round(window.innerHeight * .95)  
    this.init();
    this.loadInternalProducts();
    this.loadProductsInternos();
    this.initInt();
  }

  init(){
    this.model = {
      noPetition: "",
      /* branch: "",
      bussinesName: "", */
      nameProyect: "",
      /* orderName: "",
      comment: "",*/
      dateFinish: "",
      material: this.products,
      products: this.productsInt
    }
  }
  initInt(){
    this.modelInt={
      productId: "",
      nameProduct: "",
      long: "",
      high: "",
      width: "",
      thickness: "",
      size: "",
      quantity: "",
      parallel: "",
      cover: "",
      molding: "", 
      accessories: "",
      caliber: "",
      install: ""
    }
  }

  save(f){
    console.log('form', f.valid);

    if(f.valid){
      
    let date = this.model.dateFinish;
    date = new Date(date);
    this.model.dateFinish = date;
    console.log(this.model);
    this._w.emit("createOrderProduction",this.model,(res)=>{
      swal({
        title: res.status+"!",
        text: res.obj,
        icon: res.ok
      })
      this.init();
      console.log(res);
    });
    }
  }

  addProduct(){
    let obj = {
      "productId":this.productId,
      "name": this.productName,
      "quantity": this.productCant
    };
    this.products.push(obj);
    this.article = "";
    this.productCant = "";
    console.log(this.products);
  }

  loadProductsInternos(){
    let filters = {
      "category": this.category
    }
    console.log(filters);
    this._w.emit("getProductInt",{filters}, async (res)=>{
      
      this.productsLoad = await res.obj;
      console.log('esto es lo que trae',this.productsLoad);
    });
  }

  loadProductinterno(id){
    console.log(id);
    let filters = {
      "_id": id
    }
    console.log(filters);
    this._w.emit("getProductInt",{filters}, async (res)=>{
      
      this.productInt = await res.obj;
      this.modelInt.nameProduct = res.obj[0].name;
      console.log('esto es lo que trae',this.productInt);
    });
  }

  addProductInt(){
    console.log(this.modelInt);
    this.productsInt.push(this.modelInt);
    console.log(this.productsInt);
    this.initInt();
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
     this._w.emit("getMaterials","", async (res)=>{
       
       this.products = await res.obj;
       this.categoryName = this.products.name;
       console.log('esto es lo que trae',this.products[0].name);
     });
   }
   loadInternalProducts(){
    this._w.emit("getMaterials","",(res)=>{          
      this.internalProducts = res.obj;
      console.log(this.internalProducts);        
    });
  }
   loadMaterial(){    
    this._w.emit("getMaterials","",(res)=>{      
      this.material = res.obj;
      console.log(this.material);
    })
  }
 
  loadNameProduct(){
    console.log(this.productId);
    let filters = {
      _id: this.productId
    };
    
    this._w.emit("getMaterials",{filters},(res)=>{  
      this.productName = res.obj[0].name;
      this.productsInternal = res.obj[0].materials;
      console.log(this.productName);
      console.log(this.productsInternal);
      //////cargar datos de cada material
    });
    
    
  }

  


  ngOnInit() {
  }

}
