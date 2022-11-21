import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(

    public wsService: WebsocketService,

    public chatService: ChatService

  ) { }

  ngOnInit(): void {
  }

}
