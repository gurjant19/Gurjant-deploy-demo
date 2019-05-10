import { RouterModule } from '@angular/router';
import { PostService } from './services/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { CoursesComponent } from './courses/courses.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordchangeComponent } from './passwordchange/passwordchange.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { AppErrorHandler } from './common/app-errorHandler';
import { GithubFollowrersComponent } from './github-followrers/github-followrers.component';
import { GithubFollowersService } from './services/github-followers.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ArchiveComponent } from './archive/archive.component';

@NgModule({
  declarations: [
    AppComponent,
    LikeComponent,
    ZippyComponent,
    CoursesComponent,
    PasswordchangeComponent,
    PostComponent,
    GithubFollowrersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotfoundComponent,
    ArchiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // RouterModule.forRoot([
    //   { path: '', component: HomeComponent },
    //   { path: 'followers/:username/:id', component: GithubProfileComponent},
    //   { path: 'followers', component: GithubFollowrersComponent},
    //   { path: 'posts', component: PostComponent},
    //   { path: '**', component: NotfoundComponent}
    // ])
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'archive/:year/:month', component: ArchiveComponent },
      { path: '**', component: NotfoundComponent }
    ])
  ],
  providers: [
    PostService,
    GithubFollowersService,
    {provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
