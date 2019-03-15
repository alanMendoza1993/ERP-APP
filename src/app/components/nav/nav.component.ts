import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent  {
  ultimo = null ;
  user: any = {};
  listo=false;
  numero: boolean [] = [];
  w : number;
  constructor(
    private _userService: UserService,
    private router: Router
    ) {
      this.w = Math.round(window.innerHeight * .95) 
      this.user = this._userService.getUser();
   /*  let state = setInterval(() => {
      if(document.readyState == 'complete'){
        this.listo= true;
        console.log('uno');
        clearInterval(state);
        }
    },100) */

  }
  
  cambiar(s: number) {
    
      this.user[0].modules.forEach((e,i)=>{
        if (i != s){
          this.numero[i]= false;
        }
          
        
        
          
    });
     
    this.numero[s] = !this.numero[s];
  
    
  }

}
