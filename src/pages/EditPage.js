import React from 'react';
import { Query, Mutation } from 'react-apollo';

import { EDIT_NOTE, GET_NOTE } from '../apollo/queries';
import EditorContainer from '../containers/EditorContainer';

const EditPage = ({ id }) => {
    return (
        <Query query={GET_NOTE} variables={{ id }}>
            {({ data: { note } }) => {
                if (!note) return <h1>No Note</h1>;
                return (
                    <Mutation mutation={EDIT_NOTE}>
                        {editNote => {
                            return <EditorContainer submit={editNote} {...note} />;
                        }}
                    </Mutation>
                );
            }}
        </Query>
    );
};

export default EditPage;
