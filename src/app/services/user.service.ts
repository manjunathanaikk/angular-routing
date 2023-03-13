import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class UserService {
  // userAddEvents = new EventEmitter<boolean>();
  userAddEvents = new Subject<boolean>();
  getUser(id: string) {
    if (id === '1') {
      return { id: '1', name: 'manju' };
    } else {
      return { id: '2', name: 'Vani' };
    }
  }
  addUser() {
    // this.userAddEvents.emit(true);
    this.userAddEvents.next(true);
  }
}
