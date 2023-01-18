import { useQuery } from '@apollo/client';
import { REPO_SEARCH } from '../../queries/queries';

export interface RepoTableProps {
  repoQuery: string;
  resNo: number;
}

export const RepoTable = ({ repoQuery, resNo }: RepoTableProps): JSX.Element => {
  const { loading, error, data } = useQuery(REPO_SEARCH, {
    variables: { repoQuery, resNo }
  });
  if (loading) return <div>loading...</div>;
  if (error !== undefined) {
    console.log(error);
    return <h1>Error found</h1>;
  }
  if (data !== undefined) {
    console.log(data);
  }
  return <div>Hello om !</div>;
};
