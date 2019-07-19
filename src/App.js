import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const query = gql`
    {
        note @client {
            title
        }
    }
`;

const App = () => {
    return (
        <Query query={query}>
            {({ loading, data }) => {
                return null;
            }}
        </Query>
    );
};

export default App;
