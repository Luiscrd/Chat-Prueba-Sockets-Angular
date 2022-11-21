import { Component, Input, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  @Input() messages: any[] = [];

  public name: string = '';

  constructor(

    wsService: WebsocketService

  ) {

    this.name = wsService.user?.name!;

  }

  ngOnInit(): void {
  }

}
