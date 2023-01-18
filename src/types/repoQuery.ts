export interface queryResult {
  search: Search;
}
export interface Search {
  __typename: string;
  edges?: EdgesEntity[] | null;
}
export interface EdgesEntity {
  __typename: string;
  node: Node;
}
export interface Node {
  __typename: string;
  name: string;
  id: string;
  url: string;
  forkCount: number;
  stargazerCount: number;
}
