export interface Anime {
  id: number;
  score: number;
  media: {
    id: number;
    title: {
      userPreferred: string;
    }
  }
}

export interface Glup3AnimeListQuerryResult {
  data: {
    MediaListCollection: {
      lists: {
        name: string;
        entries: Anime[];
      }[]
      user: {
        id: number;
        name: string;
        avatar: {
          large: string;
        }
      }
    }
  }
  loading: any;
}