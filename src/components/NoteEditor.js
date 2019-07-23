import React, { memo } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFont } from '@fortawesome/free-solid-svg-icons';
import { faMarkdown } from '@fortawesome/free-brands-svg-icons';
import { faHistory } from '@fortawesome/free-solid-svg-icons';

import { Title } from '../styles/titles';
import { GrayButton, StickyButton } from '../styles/buttons';

const NoteEditor = ({ id, editView, resetVals, toggleEditview, history }) => {
    return (
        <>
            <GrayButton onClick={history.goBack} left>
                <FontAwesomeIcon icon="chevron-left" />
            </GrayButton>
            <GrayButton onClick={resetVals} red>
                <FontAwesomeIcon icon={faHistory} />
            </GrayButton>
            <StickyButton onClick={() => toggleEditview(!editView)} transparent>
                <FontAwesomeIcon icon={editView ? faMarkdown : faFont} size="2x" />
            </StickyButton>
            <Title>{id ? 'Edit Note' : 'New Note'}</Title>
        </>
    );
};

export default memo(withRouter(NoteEditor));
