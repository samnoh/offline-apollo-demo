import gql from 'graphql-tag';
import { NOTE_FRAGMENT } from './fragments';

export const GET_NOTES = gql`
    ${NOTE_FRAGMENT}
    {
        notes @client {
            ...NoteParts
        }
    }
`;

export const GET_NOTE = gql`
    ${NOTE_FRAGMENT}
    query getNote($id: String!) {
        note(id: $id) @client {
            ...NoteParts
        }
    }
`;
