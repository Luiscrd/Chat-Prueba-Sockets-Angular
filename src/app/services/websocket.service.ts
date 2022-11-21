import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { User } from '../classes/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus = false;

  public user: User | null = null;

  constructor(

    private socket: Socket,

    private roter: Router

  ) {

    this.checkStatus();

    this.readStorage();

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

        if (resp.ok) {

          this.user = new User(name, img);

          this.saveStorage(this.user);

          resolve();

        }

      });

    });

  }

  saveStorage(user: User) {

    localStorage.setItem('user', JSON.stringify(user));

  }

  readStorage() {

    if (localStorage.getItem('user')) {

      this.user = JSON.parse(localStorage.getItem('user')!);

      return;

    }

    this.roter.navigateByUrl('/login');

  }

}
