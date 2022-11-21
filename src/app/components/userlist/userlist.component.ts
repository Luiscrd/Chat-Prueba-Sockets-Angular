import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  public name: string = '';

  public img: string = '';

  constructor(

    public webSocketService: WebsocketService

  ) {

    this.name = webSocketService.user!.name;

    this.img = webSocketService.user!.img!;

   }

  ngOnInit(): void {
  }

}
