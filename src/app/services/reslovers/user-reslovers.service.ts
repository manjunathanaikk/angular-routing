import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserService } from '../user.service';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
interface User {
  id: string;
  name: string;
}
@Injectable({ providedIn: 'root' })
export class UserResloversService implements Resolve<User> {
  constructor(private userService: UserService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): User | Observable<User> | Promise<User> {
    let id = route.params['id'];
    let details = this.userService.getUser(id);
    return details;
  }
}
