import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  constructor(private router: Router, private userService: UserService) {}
  goToCategories() {
    // this.router.navigateByUrl('/categories');
    this.router.navigate(['/categories']);
  }
  onAddUsers() {
    this.userService.addUser();
  }
}
