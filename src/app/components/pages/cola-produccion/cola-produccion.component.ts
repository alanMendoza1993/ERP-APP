import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cola-produccion',
  templateUrl: './cola-produccion.component.html',
  styleUrls: ['./cola-produccion.component.css']
})
export class ColaProduccionComponent implements OnInit {
  w : number;
  display='none';
  hei: any;
pageReady: boolean = false;
  constructor() {
    

    this.w = Math.round(window.innerHeight * .95);
    var ready = setInterval(() => {
      if (document.readyState === 'complete') {
        this.pageReady = true;
        this.hei = document.getElementById('contenti').clientHeight;
        this.hei = this.hei - 100;
        document.getElementById("main").style.height = this.hei+'px';
        document.getElementById("mySidenav").style.display="inline";

        clearInterval(ready);

      }
    },1000);
   }

   ngOnInit() {
  }
  
  terminar(proceso:any){
    console.log(proceso);
    if(proceso == 2){
      console.log('terminada');
      /* document.getElementById("openModalButton").click(); */
      
      document.getElementById("main").style.width="77%";
      document.getElementById("main").style.maxWidth="77%";
               
      document.getElementById("mySidenav").style.marginLeft="10px";
            
            document.getElementById("mySidenav").style.right="0";
            document.getElementById("mySidenav").style.marginRight="0";
            document.getElementById("main").style.resize = "horizontal";
            document.getElementById("main").style.overflow = "scroll";
            var st = setInterval(() =>{
              document.getElementById("mySidenav").style.transition="0s";
              document.getElementById("main").style.transition="0s"; 
              clearInterval(st);
               
            }, 1000);
           
            
           
            
          }
          /* 
          */
        }
        
        cancelarmod(){ 
          document.getElementById("mySidenav").style.transition="1s";
          document.getElementById("mySidenav").style.marginRight="-20%";
          document.getElementById("mySidenav").style.width="20%";
          
          
          document.getElementById("main").style.transition="1s";          
          document.getElementById("main").style.overflow="inherit";
            document.getElementById("main").style.resize = "none";
            document.getElementById("main").style.maxWidth="100%";
            document.getElementById("main").style.width="100%";

   
  }

}
