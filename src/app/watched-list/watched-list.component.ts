import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';
import gql from 'graphql-tag';

import { Anime, Glup3AnimeListQuerryResult } from '../types';

const Glup3AnimeListQuerry = gql`
  query {
    MediaListCollection(userId: 251748, type: ANIME, status_in: [COMPLETED, CURRENT], sort: [MEDIA_POPULARITY_DESC]) {
      user {
        id
        name
        avatar {
          large
        }
      }
      lists {
        name
        entries {
          id
          score
          media {
            id
            title {
              userPreferred
            }
          }
        }
      }
    }
  }
`;

@Component({
  selector: 'app-watched-list',
  templateUrl: './watched-list.component.html',
  styleUrls: ['./watched-list.component.scss']
})
export class WatchedListComponent implements OnInit {
  loading: boolean;
  completedList: Anime[];

  private querySubscription: Subscription;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.querySubscription = this.apollo.watchQuery<any>({
      query: Glup3AnimeListQuerry
    })
      .valueChanges
      .subscribe(({ data, loading }: (Glup3AnimeListQuerryResult)) => {
        this.loading = loading,
          this.completedList = data.MediaListCollection.lists.find((value) => 
            value.name === "Watching"
          ).entries;
        console.log(this.completedList);

      });
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
