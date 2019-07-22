import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Title } from '../styles/titles';
import { EditorContainer, TitleInput, ContentContainer, ContentInput } from '../styles/editor';
import MarkdownStyle from '../styles/markdown';

const NoteEditor = ({ id, titleVal, contentVal, editView, setTitleVal, setContentVal }) => {
    return (
        <>
            <Title>{id ? 'Edit Note' : 'New Note'}</Title>
            <EditorContainer>
                <TitleInput
                    value={titleVal}
                    onChange={e => setTitleVal(e.target.value)}
                    placeholder="Title..."
                    name="title"
                    autoFocus
                />
                <ContentContainer>
                    <ContentInput
                        value={contentVal}
                        onChange={e => setContentVal(e.target.value)}
                        placeholder="Markdown..."
                        name="content"
                        show={editView ? 1 : 0}
                    />
                    <MarkdownStyle editor show={!editView}>
                        <ReactMarkdown className="markdown-body" source={contentVal} />
                    </MarkdownStyle>
                </ContentContainer>
            </EditorContainer>
        </>
    );
};

export default NoteEditor;
