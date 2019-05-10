import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  year: number;
  month: number;

  constructor(private route: ActivatedRoute, private router: Router) { }
  viewAll() {
    this.router.navigate(['/']);
  }

  ngOnInit() {
    const pram = this.route.snapshot.paramMap;
    this.year = +pram.get('year');
    this.month = +pram.get('month');
  }

}
