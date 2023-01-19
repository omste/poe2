import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/client';
import { client } from './utils/apolloClient';
import { RepoPage } from './components/organisms/repoPage';

const App = (): JSX.Element => {
  return (
    <ApolloProvider client={client}>
      <RepoPage />
    </ApolloProvider>
  );
};

export default App;
