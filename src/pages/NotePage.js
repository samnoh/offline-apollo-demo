import React from 'react';
import { Query } from 'react-apollo';

import { GET_NOTE } from '../apollo/queries';
import NoteContainer from '../containers/NoteContainer';

const NotePage = ({ id }) => {
    return (
        <Query query={GET_NOTE} variables={{ id }}>
            {props => <NoteContainer {...props} />}
        </Query>
    );
};

export default NotePage;
