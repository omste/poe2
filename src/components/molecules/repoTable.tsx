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
