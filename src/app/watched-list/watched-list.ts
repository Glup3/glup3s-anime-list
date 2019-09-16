import gql from 'graphql-tag';

const glup3AnimeList = gql`
  query Glup3AnimeList($username: String) {
    MediaListCollection(userName: $username, type: ANIME, status_in: [COMPLETED, CURRENT], sort: [MEDIA_POPULARITY_DESC]) {
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