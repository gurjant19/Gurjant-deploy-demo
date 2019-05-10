import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {
  @Input() title: string;
  @Input() isExpanded: boolean;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  constructor() { }

  ngOnInit() {
  }

}
