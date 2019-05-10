import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubFollowrersComponent } from './github-followrers.component';

describe('GithubFollowrersComponent', () => {
  let component: GithubFollowrersComponent;
  let fixture: ComponentFixture<GithubFollowrersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubFollowrersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubFollowrersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
