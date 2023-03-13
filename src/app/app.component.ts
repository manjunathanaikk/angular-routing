import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/guards/auth.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  usersAdded: boolean = false;
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}
  title = 'angular-routing';
  onLogin() {
    this.authService.login();
  }
  onLogOut() {
    this.authService.logout();
  }
  ngOnInit(): void {
    this.userService.userAddEvents.subscribe((res) => {
      console.log(res);
      this.usersAdded = res;
    });
  }
}
