import React from 'react';
import { Query } from 'react-apollo';

import NotesContainer from '../containers/NotesContainer';
import { GET_NOTES } from '../apollo/queries';

const NotesPage = () => {
    return (
        <>
            <Query query={GET_NOTES}>{props => <NotesContainer {...props} />}</Query>
        </>
    );
};

export default NotesPage;
