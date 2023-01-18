import { gql } from '@apollo/client';

export const GET_REPO_OWNER_NAME = gql`
  query {
    viewer {
      login
    }
  }
`;
