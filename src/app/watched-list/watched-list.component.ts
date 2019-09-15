import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Glup3AnimeListGQL, MediaListGroup } from '../../generated';

@Component({
  selector: 'app-watched-list',
  templateUrl: './watched-list.component.html',
  styleUrls: ['./watched-list.component.scss']
})
export class WatchedListComponent implements OnInit {
  result: Observable<MediaListGroup[]>;

  constructor(private glup3AnimeListGQL: Glup3AnimeListGQL) { }

  ngOnInit() {
    this.result = this.glup3AnimeListGQL.watch()
      .valueChanges
      .pipe(map(res => {
        return res.data.MediaListCollection.lists;
      }));
  }
}