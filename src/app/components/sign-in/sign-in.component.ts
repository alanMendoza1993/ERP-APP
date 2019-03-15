import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/web-socket.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [WebsocketService]
})
export class SignInComponent implements OnInit {

    token:any;
  constructor(private w: WebsocketService, private router: Router) { 

    this.token = localStorage.getItem("token");
    if(this.token == "" || this.token == null){
      this.router.navigateByUrl('/home');
    }

  }

  user: any;
  password: any;
  model: any
  ngOnInit() {
  }

  signin(){
    this.model = {
      roster: this.user,
      password: this.password
    };
    console.log(this.model);
    this.w.emit("signIn",this.model,(res)=>{
     if(res.ok === "success"){
      swal({
        title: res.status+"!",
        text: "Registro Exitoso",
        icon: res.ok,
      });
      this.router.navigateByUrl('/home');
      localStorage.setItem("token", res.obj);
     }else{
      swal({
        title: res.status+"!",
        text: res.obj,
        icon: "error",
      });
      this.router.navigateByUrl('/');
     }
    });
 }
}
