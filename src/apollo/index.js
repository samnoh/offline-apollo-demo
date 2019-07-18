import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';

import { resolvers, typeDefs, defaults } from './clientState';

const cache = new InMemoryCache();

const client = new ApolloClient({
    cache,
    typeDefs,
    resolvers
});

cache.writeData({
    data: defaults
});

export default client;
