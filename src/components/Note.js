import React from 'react';
import { Link } from 'react-router-dom';

const Note = ({ id, title }) => {
    return (
        <Link to={`/note/${id}`} key={id}>
            <h1>{title}</h1>
        </Link>
    );
};

export default Note;
