import uuid from 'node-uuid';


export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: uuid.v4(),
    text
});

export const receiveTodos = (filter, response) => ({
    type: 'RECEIVE_TODOS',
    filter,
    response
});

/*export const setVisibilityFilter = (filter) => ({
    type:'SET_VISIBILITY_FILTER',
    filter
});*/

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
});