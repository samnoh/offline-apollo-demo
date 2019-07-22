import React from 'react';
import ReactMarkdown from 'react-markdown';
import Helmet from 'react-helmet';
import { withRouter, Prompt } from 'react-router-dom';

import { Title } from '../styles/titles';
import { EditorContainer, TitleInput, ContentContainer, ContentInput } from '../styles/editor';
import { GrayButton, LargeButton, StickyButton } from '../styles/buttons';
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
    preventLeave,
    shouldPrevent,
    history
}) => {
    return (
        <>
            <Helmet>
                <title>{id ? 'Edit Note' : 'Add Note'}</title>
            </Helmet>
            <Prompt when={shouldPrevent} message={preventLeave} />
            <GrayButton onClick={history.goBack} left>
                <i className="fas fa-chevron-left fa-lg" />
            </GrayButton>
            <GrayButton onClick={resetVals} red>
                <i className="fas fa-history fa-xl" />
            </GrayButton>
            <LargeButton onClick={submitNote}>Save</LargeButton>
            <StickyButton onClick={() => toggleEditview(!editView)}>
                {editView ? 'Preview' : 'Edit'}
            </StickyButton>
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

export default withRouter(NoteEditor);
