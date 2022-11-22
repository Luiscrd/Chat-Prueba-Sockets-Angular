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

  public img: string = '';

  constructor(

    public webSocketService: WebsocketService

  ) {

    // this.name = webSocketService.user!.name;

    // this.img = webSocketService.user!.img!;

    this.name = 'Sala Generál';

    this.img = 'https://www.picpng.com/_next/image?url=https%3A%2F%2Fcdn.picpng.com%2Fcomputer%2Fcomputer-user-icon-peolpe-58180.png&w=1080&q=100'

   }

  ngOnInit(): void {
  }

  logout() {

    this.webSocketService.logoutWs();

  }

}
