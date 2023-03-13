import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-pipes',
  templateUrl: './filter-pipes.component.html',
  styleUrls: ['./filter-pipes.component.css'],
})
export class FilterPipesComponent {
  appStatus = new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove('User Data recived');
    }, 3000);
  });
  users = [
    { userName: 'vanitha', joinedDate: new Date(15, 2, 2016) },
    { userName: 'Abc', joinedDate: new Date(17, 2, 2019) },
    { userName: 'xyz', joinedDate: new Date(17, 2, 2020) },
  ];
  filterdStr: string = '';
  onAddUser() {
    this.users.push({
      userName: 'manju',
      joinedDate: new Date(23, 4, 2022),
    });
  }
}
