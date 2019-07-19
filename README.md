# Offline Apollo Demo

-   graphql
-   graphql-tag
-   apollo-cache-inmemory
-   apollo-client
-   react-router-dom
-   react-textarea-autosize
    -   A textarea component that automatically resizes textarea as content changes
-   styled-components
-   styled-reset
    -   Reset CSS for styled-components

## TIL

### GraphQL Fragment

-   Share fields across queries

```graphql
fragment NameParts on Person {
    firstName
    lastName
}

query GetPerson {
    people(id: "7") {
        ...NameParts
        avatar(size: LARGE)
    }
}
```

### Apollo Local State Management

-   Configure
    -   `apollo-link-state` is deprecated
    -   `apollo-client@2.5` can handle local state now

```JavaScript
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
    data: defaults // default data
});

export default client;
```

-   `cache`
    -   `cache.readFragment({ fragment, id })`
    -   `cache.readQuery({ query })`
    -   `cache.writeDate({ data: {} })`
    -   Maniuplate or read the cache
-   `getCacheKey({ __typename, id })`
    -   Get a key from the cache using `__typename` and `id`

```JavaScript
Query: {
    note: (_, { id }, { cache, getCacheKey }) => {
        const noteId = getCacheKey({ __typename: 'Note', id });
        const note = cache.readFragment({ fragment: NOTE_FRAGMENT, id: noteId });
        return note;
    }
}
```

```JavaScript
Mutation: {
    createNote: (_, { title, content }, { cache }) => {
        const { notes } = cache.readQuery({ query: GET_NOTES });
        const newNote = { id: uuid(), title, content, __typename: 'Note' };
        cache.writeData({ data: { notes: [...notes, newNote] } });
        return newNote;
    }
}
```
