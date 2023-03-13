import { Component, OnInit } from '@angular/core';
import { IDeactivateGuard } from '../services/guards/deactivate-guard.service';
import { ActivatedRoute, Params } from '@angular/router';

type NewType = undefined;

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements IDeactivateGuard, OnInit {
  user!: { id?: string; name?: string };
  editUserDetails!: { id?: string; name?: string };
  constructor(private routes: ActivatedRoute) {}
  canExit() {
    if (
      this.editUserDetails.id !== this.user.id ||
      this.editUserDetails.name !== this.user.name
    ) {
      if (confirm('Are Your sure You want to exit')) {
        return true;
      } else {
        return false;
      }
    }

    return true;
  }
  ngOnInit(): void {
    this.routes.data.subscribe((data) => {
      this.user = {
        id: data['user']['id'],
        name: data['user']['name'],
      };
      this.editUserDetails = { ...this.user };
    });
    // this.routes.params.subscribe((data: Params) => {
    //   this.user = {
    //     id: data['id'],
    //     name: data['name'],
    //   };
    //   // console.log(data);
    // });
    // this.editUserDetails = { ...this.user };
  }
}
