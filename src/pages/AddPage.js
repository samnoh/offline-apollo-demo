import React from 'react';
import { Mutation } from 'react-apollo';

import { ADD_NOTE } from '../apollo/queries';
import EditorContainer from '../containers/EditorContainer';

const AddPage = () => {
    return (
        <Mutation mutation={ADD_NOTE}>
            {createNote => {
                return <EditorContainer submit={createNote} />;
            }}
        </Mutation>
    );
};

export default AddPage;
