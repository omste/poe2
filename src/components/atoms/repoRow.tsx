export interface RepoRowProps {
  idx: number;
  title: string;
  url: string;
  stars: string;
  forks: string;
}

const chooseBg = (idx: number): string => {
  if (idx % 2 === 0) {
    return '#aaa';
  }
  return '#ccc';
};

export const RepoRow = ({ idx, title, url, stars, forks }: RepoRowProps): JSX.Element => {
  return (
    <div
      key={idx}
      style={{ columnCount: 3, padding: 10, marginTop: 0, backgroundColor: chooseBg(idx) }}>
      <p style={{ marginTop: 0 }}>
        <a href={url}>{title}</a>
      </p>
      <p>{stars}</p>
      <p>{forks}</p>
    </div>
  );
};
