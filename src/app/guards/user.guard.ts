import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { WebsocketService } from '../services/websocket.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate, CanLoad {

  constructor(

    private wsService: WebsocketService,

    private router: Router

  ) {}
  canLoad(route: Route, segments: UrlSegment[]): boolean {

    if (this.wsService.user) {

      return true;

    } else {

      this.router.navigateByUrl('/login');

      return false;

    }

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {

      if (this.wsService.user) {

        return true;

      } else {

        this.router.navigateByUrl('/login');

        return false;

      }

  }

}
