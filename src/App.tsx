import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/client';
import { client } from './utils/apolloClient';
import { RepoTable } from './components/organisms/repoTable';

const App = (): JSX.Element => {
  return (
    <ApolloProvider client={client}>
      <RepoTable repoQuery={'react'} resNo={5} />
    </ApolloProvider>
  );
};

export default App;
