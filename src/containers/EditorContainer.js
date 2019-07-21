import React from 'react';

import NoteEditor from '../components/NoteEditor';

const EditorContainer = props => {
    return (
        <>
            <NoteEditor {...props} />
        </>
    );
};

export default EditorContainer;
