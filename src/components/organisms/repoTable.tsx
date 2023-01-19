import { useLazyQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { REPO_SEARCH } from '../../queries/queries';
import { QueryResult, EdgesEntity } from '../../types/repoQuery';
import { RepoRow } from '../atoms/repoRow';

export interface RepoTableProps {
  resultSet: EdgesEntity[] | null | undefined;
}

export const RepoTable = ({ resultSet }: RepoTableProps): JSX.Element => {
  console.log(resultSet);
  if (resultSet === null || resultSet === undefined) {
    return <h1>no results</h1>;
  }
  return (
    <div>
      {resultSet.map((res, idx) => {
        return (
          <div key={res.node.id}>
            <RepoRow
              idx={idx}
              title={res.node.name}
              url={res.node.url}
              stars={`${res.node.stargazerCount}`}
              forks={`${res.node.forkCount}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export const RepoPage = (): JSX.Element => {
  const repoQuery = 'react';
  const resNo = 50;
  const [getSearchTerm, setSearchTerm] = useState<string>(repoQuery);
  const [getData, { loading, error, data }] = useLazyQuery<QueryResult>(REPO_SEARCH, {
    variables: { repoQuery: getSearchTerm, resNo }
  });

  useEffect(() => {
    // TO DO : debounce this
    // TO DO : fix TS promise error
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getData();
  }, []);

  if (loading) return <div>loading...</div>;
  if (error !== undefined) {
    console.error(error);
    return <h1>Error found</h1>;
  }
  if (data !== undefined) {
    console.log(data);
  }

  return (
    <div>
      <input
        type="text"
        value={getSearchTerm}
        placeholder="search term"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />{' '}
      search term
      <RepoTable resultSet={data?.search.edges} />
    </div>
  );
};
