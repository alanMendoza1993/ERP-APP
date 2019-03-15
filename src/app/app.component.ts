import { Component } from '@angular/core';

import { WebsocketService } from 'src/app/services/web-socket.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vsoft-app';
  constructor(private _w: WebsocketService){

  }


}
