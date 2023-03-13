import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: { id: string; name: string } | undefined;
  constructor(private routes: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.user = {
      id: this.routes.snapshot.params['id'],
      name: this.routes.snapshot.params['name'],
    };
    this.routes.params.subscribe((data: Params) => {
      this.user = {
        id: data['id'],
        name: data['name'],
      };
    });
    // console.log(this.routes.snapshot.queryParams);
    // console.log(this.routes.snapshot.fragment);
    this.routes.queryParams.subscribe((data) => {
      console.log(data);
    });
    this.routes.fragment.subscribe((data) => {
      console.log(data);
    });
  }

  getRamaDetails() {
    this.router.navigate(['/users', 2, 'Rama'], {
      queryParams: {
        page: 1,
        search: 'Ramma',
      },
      fragment: 'loading',
    });
  }
  onEditUser() {
    this.router.navigate(['/users', this.user?.id, this.user?.name, 'edit'], {
      queryParamsHandling: 'preserve',
    });
  }
}
