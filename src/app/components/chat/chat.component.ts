import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public messages: any[] = [];

  public message: string = '';

  constructor(

    public wsService: WebsocketService,

    public chatService: ChatService

  ) { }

  ngOnInit(): void {

    this.chatService.getMessages().subscribe(msg => {

      console.log(msg);

    })

  }

  send(){

    console.log(this.message);

    this.chatService.sendMessage(this.message);

    this.message = '';

  }

}
