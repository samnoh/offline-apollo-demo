import React from 'react';
import ReactMarkdown from 'react-markdown';
import { withRouter } from 'react-router-dom';

import { Title } from '../styles/titles';
import { EditorContainer, TitleInput, ContentContainer, ContentInput } from '../styles/editor';
import { GrayButton, AddButton, ShowButton } from '../styles/buttons';
import MarkdownStyle from '../styles/markdown';

const NoteEditor = ({
    id,
    titleVal,
    contentVal,
    editView,
    setTitleVal,
    setContentVal,
    resetVals,
    submitNote,
    toggleEditview,
    history
}) => {
    return (
        <>
            <GrayButton onClick={() => history.goBack()} left>
                Back
            </GrayButton>
            <GrayButton onClick={resetVals}>Reset</GrayButton>
            <AddButton onClick={submitNote}>Save</AddButton>
            <ShowButton onClick={() => toggleEditview(!editView)}>
                {editView ? 'Preview' : 'Edit'}
            </ShowButton>
            <Title>{id ? 'Edit Note' : 'Add Note'}</Title>
            <EditorContainer>
                <TitleInput
                    value={titleVal}
                    onChange={e => setTitleVal(e.target.value)}
                    placeholder="Title..."
                    name="title"
                />
                <ContentContainer>
                    <ContentInput
                        value={contentVal}
                        onChange={e => setContentVal(e.target.value)}
                        placeholder="Your note"
                        name="content"
                        show={editView}
                    />
                    <MarkdownStyle editor show={!editView}>
                        <ReactMarkdown className="markdown-body" source={contentVal} />
                    </MarkdownStyle>
                </ContentContainer>
            </EditorContainer>
        </>
    );
};

export default withRouter(NoteEditor);
