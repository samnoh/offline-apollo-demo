import React, { useState, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import { withRouter } from 'react-router-dom';

import { Title } from '../styles/titles';
import { GrayButton, AddButton, ShowButton } from '../styles/buttons';
import { EditorContainer, TitleInput, ContentContainer, ContentInput } from '../styles/editor';
import MarkdownStyle from '../styles/markdown';

const NoteEditor = ({ id, title = '', content = '', submit, history }) => {
    const [titleVal, setTitleVal] = useState(title);
    const [contentVal, setContentVal] = useState(content);
    const [editView, toggleEditview] = useState(true);

    const submitNote = useCallback(() => {
        if (titleVal === '' || contentVal === '') {
            alert('No');
            return;
        }
        submit({ variables: { id, title: titleVal, content: contentVal } });
        history.push('/');
    }, [id, titleVal, contentVal, submit, history]);

    const resetVals = useCallback(() => {
        if (window.confirm('Are you sure to reset?')) {
            setTitleVal(title ? title : '');
            setContentVal(content ? content : '');
        }
    }, [title, content, setTitleVal, setContentVal]);

    return (
        <>
            <GrayButton onClick={() => history.push('/')} left>
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
