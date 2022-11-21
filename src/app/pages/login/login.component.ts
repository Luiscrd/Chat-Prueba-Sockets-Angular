import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string = '';

  public password: string = '';

  public errorPassword: boolean = false;

  constructor(

    private router: Router

  ) { }

  ngOnInit(): void {
  }

  login() {

    if (this.password !== '123456') {

      this.errorPassword = true;

      return;

    }

    this.errorPassword = false;

    this.router.navigateByUrl('/');

  }

}
