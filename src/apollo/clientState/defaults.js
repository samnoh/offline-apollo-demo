import uuid from 'uuid/v4';

export default {
    notes: [{ id: uuid(), title: 'first note', content: 'hello', __typename: 'Note' }]
};
