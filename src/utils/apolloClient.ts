import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql'
});
const authLink = setContext((_, { headers }) => {
  const token = process.env.REACT_APP_GIT_KEY;
  return {
    headers: {
      ...headers,
      authorization: token !== null && token !== '' && token !== undefined ? `Bearer ${token}` : ''
    }
  };
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink)
});
