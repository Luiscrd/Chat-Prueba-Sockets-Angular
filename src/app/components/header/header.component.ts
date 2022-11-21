import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../classes/user';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() messages: any[] = [];

  public name: string = '';

  constructor(

    public webSocketService: WebsocketService

  ) {

    this.name = webSocketService.user!.name;

   }

  ngOnInit(): void {
  }

}
