import uuid from 'node-uuid';
import * as api from '../models/index';

const requestTodos = (filter) => ({
    type:'REQUEST_TODOS',
    filter
});

export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: uuid.v4(),
    text
});

const receiveTodos = (filter, response) => ({
    type: 'RECEIVE_TODOS',
    filter,
    response
});
/*Todo: promise*/
/*export const fetchTodos =  (filter) =>
    api.fetchTodos(filter).then((response) =>
        receiveTodos(filter,response));*/
export const fetchTodos =  (filter) => (dispatch) => {
    dispatch(requestTodos(filter));

    return api.fetchTodos(filter).then((response) => {
        dispatch(receiveTodos(filter,response));
    });
};
/*export const setVisibilityFilter = (filter) => ({
    type:'SET_VISIBILITY_FILTER',
    filter
});*/

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
});