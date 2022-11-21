import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string = 'Luis Carballo';

  public password: string = '123456';

  public image: string = 'https://vectorified.com/images/no-profile-picture-icon-6.png';

  public errorPassword: boolean = false;

  constructor(

    private router: Router,

    private wsService: WebsocketService

  ) { }

  ngOnInit(): void {
  }

  login() {

    if (this.username.length === 0) return;

    if (this.password !== '123456') {

      this.errorPassword = true;

      return;

    }

    if(this.image.length === 0) {
      this.image = 'https://vectorified.com/images/no-profile-picture-icon-6.png'
    }

    this.wsService.loginWs(this.username, this.image).then(() => {

      this.errorPassword = false;

      this.router.navigateByUrl('/');

    });

  }

}
