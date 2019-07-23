import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { SubTitle } from '../styles/titles';

const Note = ({ id, title }) => {
    return (
        <Link to={`/note/${id}`}>
            <SubTitle>{title}</SubTitle>
        </Link>
    );
};

export default memo(Note);
