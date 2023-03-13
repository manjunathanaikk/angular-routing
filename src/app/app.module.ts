import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { UserComponent } from './user/user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app.routing.module';
import { AuthService } from './services/guards/auth.service';
import { AuthGuardService } from './services/guards/auth-gurard.service';
import { DeactivateGuardService } from './services/guards/deactivate-guard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserResloversService } from './services/reslovers/user-reslovers.service';
import { UserService } from './services/user.service';
import { FormTemplateComponent } from './form-template/form-template.component';
import { ReactiveFromComponent } from './reactive-from/reactive-from.component';
import { FilterPipesComponent } from './filter-pipes/filter-pipes.component';
import { ShortenPipe } from './Pipes/shorten.pipe';
import { FilterPipe } from './Pipes/filter.pipe';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    CategoriesComponent,
    UserComponent,
    EditUserComponent,
    PageNotFoundComponent,
    FormTemplateComponent,
    ReactiveFromComponent,
    FilterPipesComponent,
    ShortenPipe,
    FilterPipe,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    AuthGuardService,
    DeactivateGuardService,
    UserResloversService,
    UserService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
