import { Component, OnInit } from '@angular/core';
import { RUTA } from 'src/app/services/api.service';
import { NgForm } from '@angular/forms';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';
import { WebsocketService } from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-nominas',
  templateUrl: './nominas.component.html',
  styleUrls: ['./nominas.component.css'],
  providers: [UsersService, WebsocketService]
})
export class NominasComponent implements OnInit {
  w : number;
  model: any;
pageReady: boolean = false;
  constructor(private _userService: UsersService, private _w: WebsocketService) { 
    this.w = Math.round(window.innerHeight * .95);
    var ready = setInterval(() => {
      if (document.readyState === 'complete') {
        this.pageReady = true;
        clearInterval(ready);

      }
    },1000);
    this.init();
  }

  ngOnInit() {
  }
  init(){
    this.model = {
      _id: "",
      password: "",
      noNomina: "",
      perfilType: "",
      status: "",
      //generals
          name: "",
          lastName: "",
          country: "",
          state: "",
          birth_city: "",
          birth: "",
          sex: "",
          civil: "",
          weight: "",
          height: "",
          curp: "",
          rfc: "",
          nss: "",
          umf: "",
     //contact
          email: "",
          phone: "",
          cellphone: "",
          life_city: "",
          street: "",
          noExt: "",
          noInt: "",
          colony: "",
      //others
          dateEntry: "",
          job: "",
          bank: "",
          sdInt: "",
          typeJob: "",
          typeContract: "",
          branch: "",
          regime: "",
          day_salari: "",
          payment: "",
          payment_type: "",
          journe_type: "",
          period: "",
          number_account: "",
          labor_union: "",
          //registtro Patronal
          rp: "",
          rfc_employer: "",
          departament: ""
    
  }

}

save(){
  console.log(this.model);
  this._w.emit("createUser", this.model, (res)=>{
    console.log(res);
  });
}

  
}
