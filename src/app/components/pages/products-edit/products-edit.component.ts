import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {
  category:any;
  provider:any;
  providerOption:any;
  article:any;
  w:any;
  ////
  loadArticle:any;
  loadCategory:any;
  loadProvider:any;
  ////
  searchName:any;
  constructor(private _w: WebsocketService) { 
    this.w = Math.round(window.innerHeight * .95);
    this.loadMaterial();
  }

  ngOnInit() {
    
  }
  init(){
    this.loadArticle="";
    this.loadCategory="";
    this.loadProvider="";
    ///
    this.category = "";
    this.provider = "";
    this.providerOption = "";
    this.article = "";
  }

  loadProduct(){
    if(this.providerOption == 0){
      //sin proveedor
      let filters = {
        providerId: null
      }
      this._w.emit("getProducts",{filters},(res)=>{
        this.loadArticle = res.obj;
        console.log(this.loadArticle);
        this.loadMaterial();
        this.loadNewProvider();
      });
    }else{
      if(this.providerOption == 1){
        //con proveedor
        let filters = {
          providerId: { $exists: true} 
        }
        this._w.emit("getProducts",{filters},(res)=>{
          this.loadArticle = res.obj;
          console.log(this.loadArticle);
          this.loadMaterial();
        this.loadNewProvider();
        });
      }
    }
  }

  loadMaterial(){
    this._w.emit("getMaterials","",(res)=>{
      this.loadCategory = res.obj;
      console.log(this.loadCategory);
    });
  }
  loadNewProvider(){
    this._w.emit("getProvider","",(res)=>{
      this.loadProvider = res.obj;
      console.log(this.loadProvider);
    });
  }

  save(article:any){
     let model = {
      productId: article._id,
      category: article.category,
      providerId: article.providerId
    };
    console.log('enviando: ', model);
    this._w.emit("editProducts",{model},(res)=>{
      console.log(res);
      swal({
        title: res.status+"!",
        text: res.obj,
        icon: res.ok
      })
      
    });
  }

  async search(){
    console.log(this.searchName);
    let filters = {
      title: {'$regex': this.searchName} 
    }
   await this._w.emit("getProducts",{filters},(res)=>{
      this.loadArticle = res.obj;
      console.log("Productos",this.loadArticle);
      this.loadMaterial();
    this.loadNewProvider();
    });
  }


}
