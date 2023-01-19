import { RepoRow } from '../atoms/repoRow';
import { EdgesEntity } from '../../types/repoQuery';

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
      <div style={{ columnCount: 3, padding: 10, marginTop: 0, backgroundColor: '#ccf' }}>
        <p style={{ marginTop: 0 }}>name</p>
        <p>stars</p>
        <p>forks</p>
      </div>
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
