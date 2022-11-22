import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(

    public wsService: WebsocketService

  ) { }

  sendMessage(msg: string) {

    const payload = {
      to: this.wsService.user?.name,
      msg,
      date: new Date().toUTCString()
    }

    this.wsService.emit('message', payload);

  }

  getMessages() {

     return this.wsService.listen('new-message');

  }

  getMessagesPrivate() {

    return this.wsService.listen('priavate-message');

 }

 getActivedusers() {

  return this.wsService.listen('actived-users');

}

emitActivedusers() {

  return this.wsService.emit('seend-users');

}

}
