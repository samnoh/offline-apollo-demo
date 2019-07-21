import uuid from 'uuid/v4';

export default {
    notes: [
        {
            id: uuid(),
            title: 'first note',
            content: '# This is a H1  \n## This is a H2  \n###### This is a H6',
            __typename: 'Note'
        }
    ]
};
