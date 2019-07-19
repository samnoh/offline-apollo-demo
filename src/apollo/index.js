import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { resolvers, typeDefs, defaults } from './clientState';

const cache = new InMemoryCache();

const client = new ApolloClient({
    cache,
    resolvers,
    typeDefs
});

cache.writeData({
    data: defaults
});

export default client;
