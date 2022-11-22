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

      this.socketStatus = true;

      this.readStorage();

    })

    this.socket.on('disconnect', () => {

      this.socketStatus = false;

    })

  }

  emit(event: string, payload?: any, callback?: Function) {

    this.socket.emit(event, payload, callback);

  }

  listen(event: string) {

    return this.socket.fromEvent(event);

  }

  loginWs(name: string, img: string) {

    return new Promise<void>((resolve, reject) => {

      this.emit('config-user', { name, img }, (resp: { ok: boolean, msg: string, id: string }) => {

        console.log(resp);


        if (resp.ok) {

          this.user = new User(name, img, resp.id);

          this.saveStorage(this.user);

          resolve();

        }

      });

    });

  }

  logoutWs() {

    this.user = null;

    localStorage.removeItem('user');

    this.emit('config-user', { name: 'sin-nombre', img: '' }, (resp: { ok: boolean, msg: string }) => {

      if (resp.ok) {

        this.roter.navigateByUrl('/login')

      }

    });



  }

  saveStorage(user: User) {

    localStorage.setItem('user', JSON.stringify(user));

  }

  readStorage() {

    if (localStorage.getItem('user')) {

      this.user = JSON.parse(localStorage.getItem('user')!);

      this.loginWs(this.user?.name!, this.user?.img!);

      return;

    }

    this.roter.navigateByUrl('/login');

  }

}
