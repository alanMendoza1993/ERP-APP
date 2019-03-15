import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  public status = false;
  constructor( private socket: Socket) { 
    this.checkStatus();
  }

  checkStatus() {
    this.socket.on('connect', () => {
        this.status = true;
        console.log('conectado');
    });
    this.socket.on('disconnect', () => {
      this.status = false;
      console.log('desconectado');
  });
  }

  emit(tipo: string, peyload?: any, callback?: Function){
    console.log('emitiendo', tipo);
    this.socket.emit(tipo, peyload, callback);
  }

  listen(evento: string){
    return this.socket.fromEvent(evento);
  }
}
