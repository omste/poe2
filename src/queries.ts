import { gql } from '@apollo/client';

export const REPO_SEARCH = gql`
  query repoSearch($repoQuery: String!, $resNo: Int!) {
    search(query: $repoQuery, type: REPOSITORY, first: $resNo) {
      edges {
        node {
          ... on Repository {
            name
            id
            url
            forkCount
            stargazerCount
          }
        }
      }
    }
  }
`;
