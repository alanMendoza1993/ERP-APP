import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/web-socket.service';
import swal from 'sweetalert';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
usuarios: any[] = [];
model: any;
  constructor(private _w: WebsocketService) { 
    this.init();
  }

  init(){
    this.model = {
      perfilType: "",      
      roster: "",
      userName: "",
      status: false,
      password: "",
      email: "",
      employeId: ""
    }
  }
  ngOnInit() {
    
  }

  save(){
    console.log(this.model);
    this._w.emit("createUser", this.model, (res)=>{
      swal({
        title: "Exito!",
        text: res.mensaje,
        icon: "success",
      });
      this.init();
    });
  }

}
