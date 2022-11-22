import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';
import { ChatService } from 'src/app/services/chat.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  public activedUsers!: Observable<any>;

  public name: string = '';

  public img: string = '';

  constructor(

    public webSocketService: WebsocketService,

    public chatService: ChatService

  ) {

    this.name = webSocketService.user!.name;

    this.img = webSocketService.user!.img!;

   }

  ngOnInit(): void {

    this.activedUsers = this.chatService.getActivedusers();

  }

}
