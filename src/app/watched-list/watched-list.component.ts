import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Glup3AnimeListGQL, Glup3AnimeListQuery } from '../../generated';

@Component({
  selector: 'app-watched-list',
  templateUrl: './watched-list.component.html',
  styleUrls: ['./watched-list.component.scss']
})
export class WatchedListComponent implements OnInit {
  result: Observable<Glup3AnimeListQuery>;
  name: string;

  constructor(private glup3AnimeListGQL: Glup3AnimeListGQL) { }

  ngOnInit() {
    
  }

  onSearch() {
    this.result = this.glup3AnimeListGQL.watch({
      username: this.name
    })
    .valueChanges
    .pipe(map(res => res.data));
  }

  onKey(event: any) {
    this.name = event.target.value;
  }
}