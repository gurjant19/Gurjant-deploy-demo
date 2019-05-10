import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-github-followrers',
  templateUrl: './github-followrers.component.html',
  styleUrls: ['./github-followrers.component.css']
})
export class GithubFollowrersComponent implements OnInit {
  followers;

  constructor( private route: ActivatedRoute,
               private service: GithubFollowersService ) { }

  ngOnInit() {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).pipe(switchMap(combine => {
      const id = combine[0].get('id');
      const page = combine[1].get('page');
      return this.service.getAll();
    }))
    .subscribe(followers => this.followers = followers);
  }

}
