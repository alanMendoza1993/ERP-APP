import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebsocketService } from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-app2',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.css']
})
export class App2Component implements OnInit {
  token:any;
  user: any;
  users:any;
  constructor(private w: WebsocketService, private router: Router) { 

    this.token = localStorage.getItem("token");
    if(this.token != "" && this.token != null){
      console.log(this.token);
      this.w.emit("verifyToken",{token:this.token},(res)=>{
        console.log(res);
        if(res.ok != true){          
          localStorage.clear();
          this.router.navigateByUrl('/');
        }
        this.users = JSON.stringify(res.decoded.usuario);
        localStorage.setItem("user", this.users);
      });
    }else{
      this.router.navigateByUrl('/');
    }
  }

  ngOnInit() {
    this.user = localStorage.getItem("user");
    console.log(this.user);

  }

}
