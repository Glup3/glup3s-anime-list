import { Component, OnInit, Input } from '@angular/core';
import { MediaListGroup } from 'src/generated';

@Component({
  selector: 'app-cover-grid',
  templateUrl: './cover-grid.component.html',
  styleUrls: ['./cover-grid.component.scss']
})
export class CoverGridComponent implements OnInit {

  @Input() list: MediaListGroup;

  constructor() { }

  ngOnInit() {
  }

}
