import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // return this.authService;
    // .isAuthenticated()
    // .then((result: boolean) => {
    //   if (result) {
    //     return true;
    //   } else {
    //     this.router.navigate(['/']);
    //     return false;
    //   }
    // })
    // .catch((err: any) => {
    //   console.log(err);
    // });
    let isLoggedIn = this.authService.isAuthenticated();
    if (isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
    // let isLoggedIn = this.authService.isAuthenticated();
    // if (isLoggedIn) {
    //   return true;
    // } else {
    //   this.router.navigate(['/']);
    //   return false;
    // }
  }
}
