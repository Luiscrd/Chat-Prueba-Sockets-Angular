import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  public messages: any[] = [];

  public msgSubscription!: Subscription;

  public message: string = '';

  constructor(

    public wsService: WebsocketService,

    public chatService: ChatService

  ) { }

  ngOnInit(): void {

    this.msgSubscription = this.chatService.getMessages().subscribe(msg => {

      console.log(msg);

      this.messages.push(msg);

    })

  }

  ngOnDestroy(): void {

    this.msgSubscription.unsubscribe();

  }

  send() {

    console.log(this.message);

    this.chatService.sendMessage(this.message);

    this.message = '';

  }

}
