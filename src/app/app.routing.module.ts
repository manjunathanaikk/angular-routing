import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { CategoriesComponent } from './categories/categories.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './services/guards/auth-gurard.service';
import { DeactivateGuardService } from './services/guards/deactivate-guard.service';
import { UserResloversService } from './services/reslovers/user-reslovers.service';
import { FormTemplateComponent } from './form-template/form-template.component';
import { ReactiveFromComponent } from './reactive-from/reactive-from.component';
import { FilterPipesComponent } from './filter-pipes/filter-pipes.component';
import { PostComponent } from './post/post.component';
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users',
    canActivateChild: [AuthGuardService],
    // canActivate: [AuthGuardService],
    component: UsersComponent,
    children: [
      { path: ':id/:name', component: UserComponent },
      {
        path: ':id/:name/edit',
        component: EditUserComponent,
        canDeactivate: [DeactivateGuardService],
        resolve: { user: UserResloversService },
      },
    ],
  },

  { path: 'categories', component: CategoriesComponent },
  { path: 'template-from', component: FormTemplateComponent },
  { path: 'filter-pipe', component: FilterPipesComponent },
  { path: 'post', component: PostComponent },
  { path: 'reactive-from', component: ReactiveFromComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'page-not-found' },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
