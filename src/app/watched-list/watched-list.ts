import gql from 'graphql-tag';

const glup3AnimeList = gql`
  query Glup3AnimeList {
    MediaListCollection(userId: 251748, type: ANIME, status_in: [COMPLETED, CURRENT], sort: [MEDIA_POPULARITY_DESC]) {
      lists {
        name
        entries {
          media {
            id
            title {
              romaji
            }
            coverImage{
              large
            }
          }
        }
      }
    }
  }
`;