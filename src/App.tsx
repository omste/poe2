import React from 'react';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  useQuery
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { REPO_SEARCH } from './queries';

const TestComp = (): JSX.Element => {
  //  const { loading, error, data } = useQuery(GET_REPO_OWNER_NAME, {
  //    variables: { language: 'english' }
  //  });
  const { loading, error, data } = useQuery(REPO_SEARCH, {
    variables: { repoQuery: 'React', resNo: 5 }
  });
  console.log('inside func');
  if (loading) return <div>loading...</div>;
  if (error !== undefined) return <h1>Error found</h1>;
  console.log(error);
  if (data !== undefined) {
    console.log(data);
  }
  console.log('all good func');
  return <div>Hello om !</div>;
};

const App = (): JSX.Element => {
  const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql'
  });
  const authLink = setContext((_, { headers }) => {
    const token = process.env.REACT_APP_GIT_KEY;
    return {
      headers: {
        ...headers,
        authorization:
          token !== null && token !== '' && token !== undefined ? `Bearer ${token}` : ''
      }
    };
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink)
  });

  return (
    <ApolloProvider client={client}>
      <TestComp />
    </ApolloProvider>
  );
};

export default App;
