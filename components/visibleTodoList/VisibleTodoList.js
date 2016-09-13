import React from 'react';
import TodoList from './TodoList';
import {connect} from 'react-redux';
import {toggleTodo} from '../../actions/index';
import {withRouter} from 'react-router';
import { getVisibleTodos } from '../../reducers/index';


const mapStateToProps = (state , ownprops) => ({
    todos: getVisibleTodos(state, ownprops.filter || 'all')
});

/*const mapDispatchToProps = (dispatch) => ({
    onTodoClick(id) {
        dispatch(toggleTodo(id))
    }
});*/

const VisibleTodoList = connect( //withRouter to make PARAMS available to component
    mapStateToProps,
    {onTodoClick: toggleTodo}//mapDispatchToProps
)(TodoList);

export default VisibleTodoList;

/*
 VisibleTodoList.contextTypes = {
 store: React.PropTypes.object
 };*/
