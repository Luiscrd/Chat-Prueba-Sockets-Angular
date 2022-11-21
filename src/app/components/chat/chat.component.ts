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

  public element!: HTMLElement;

  public messages: any[] = [];

  public msgSubscription!: Subscription;

  public message: string = '';

  constructor(

    public wsService: WebsocketService,

    public chatService: ChatService

  ) { }

  ngOnInit(): void {

    this.element = document.getElementById('chat')!;

    this.msgSubscription = this.chatService.getMessages().subscribe(msg => {

      console.log(msg);

      this.messages.push(msg);

      setTimeout(() => {

        this.element.scrollTop = this.element.scrollHeight;

      }, 50);

    })

  }

  ngOnDestroy(): void {

    this.msgSubscription.unsubscribe();

  }

  send() {

    console.log(this.message);

    if (this.message.length === 0) return;

    this.chatService.sendMessage(this.message);

    this.message = '';

  }

  handleKeyUp(e: any){

    if(e.keyCode === 13){

       this.send();

    }

 }

}
