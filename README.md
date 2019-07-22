# Offline Apollo Demo

-   Markdown Live Preview
-   Download Markdown File
-   Works Offline (localStorage)
-   Responsive Web
-   No Redux (GraphQL Local State)

## Install

-   apollo-cache-inmemory
-   apollo-client
-   graphql
-   graphql-tag
-   react-fontawesome
-   react-router-dom
-   react-markdown
-   react-textarea-autosize
    -   A textarea component that automatically resizes textarea as content changes
-   styled-components
-   styled-reset
    -   Reset CSS for styled-components
-   github-markdown-css

## Live Demo

[![Netlify Status](https://api.netlify.com/api/v1/badges/f6802df9-6f0d-486f-82ac-2316c6e9bd32/deploy-status)](https://app.netlify.com/sites/dazzling-knuth-408b42/deploys)

-   [Link](https://dazzling-knuth-408b42.netlify.com/)

## Screenshots

<p align="center"><img src="/img/Main.png" width="500px"><img src="/img/Editor.png" width="500px"></p>

## TIL

### GraphQL Fragment

-   Share fields across queries

```graphql
fragment NameParts on Person {
    firstName
    lastName
}

query GetPerson {
    people(id: 7) {
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

-   `@client`
    -   Used for offline queries

```graphql
{
    notes @client {
        ...
    }
}
```

-   Mutation

```graphql
export const ADD_NOTE = gql`
    mutation createNote($title: String!, $content: String) {
        createNote(title: $title, content: $content) @client {...}
    }
`;
```

```JavaScript
import { Mutation } from 'react-apollo';
...
<Mutation mutation={ADD_NOTE}>
    {createNote => <EditorContainer submit={createNote} />}
</Mutation>
```

```JavaScript
submit({ variables: { id, title, content } });
```

### react-markdown + github-markdown-css

-   Renders markdown strings to HTML
    -   escapes HTML tags by default for security issues

```JavaScript
import ReactMarkdown from 'react-markdown';
import MarkdownStyle from '../styles/markdown';
...
<MarkdownStyle>
    <ReactMarkdown className="markdown-body" source={content} />
</MarkdownStyle>
```

-   Markdown Styles

```JavaScript
import styled from 'styled-components';
import markdownStyles from 'github-markdown-css';

export default styled.div`${markdownStyles}`;
```

### Create & Download File

-   Blob

```JavaScript
const element = document.createElement('a');
const file = new Blob([note.content], { type: 'text/plain' });
element.href = URL.createObjectURL(file);
element.download = `${note.title}.md`;
document.body.appendChild(element);
element.click();
document.body.removeChild(element);
```

### react-fontawesome

-   Install

```Shell
npm install --save @fontawesome/fontawesome-svg-core @fontawesome/free-solid-svg-icons @fontawesome/react-fontawesome
```

-   Usage
    -   icon & size

```JavaScript
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft} from '@fortawesome/free-solid-svg-icons';
...
<FontAwesomeIcon icon={faChevronLeft} size="sm" />
```
