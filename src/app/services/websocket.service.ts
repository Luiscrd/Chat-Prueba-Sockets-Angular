import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus = false;

  public user!: User;

  constructor(

    private socket: Socket

  ) {

    this.checkStatus();

  }

  checkStatus() {

    this.socket.on('connect', () => {

      console.log('Conectado al servidor');

      this.socketStatus = true;

    })

    this.socket.on('disconnect', () => {

      console.log('Desconectado del servidor');

      this.socketStatus = false;

    })

  }

  emit(event: string, payload?: any, callback?: Function) {

    console.log('Emitiendo', event);

    this.socket.emit(event, payload, callback);

  }

  listen(event: string) {

    return this.socket.fromEvent(event);

  }

  loginWs(name: string, img: string) {

    console.log('Configurando', name);

    return new Promise<void>((resolve, reject) => {

      this.emit('config-user', { name, img }, (resp: {ok: boolean, msg: string}) => {

        console.log(resp);

        if (resp.ok) resolve();

      });

    });

  }

}
