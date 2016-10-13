import React,{ Component } from 'react';
import TodoList from './TodoList';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';
import {withRouter} from 'react-router';
import { getVisibleTodos,getIsFetching } from '../../reducers/index';
//import

class VisibleTodoList extends Component {
    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        if (this.props.filter !== prevProps.filter) {
            this.fetchData();
        }
    }

    fetchData() {
        const {filter , fetchTodos} = this.props;

        fetchTodos(filter);
    }

    render() {
        const {toggleTodo,todos,isFetching} = this.props;

        debugger;
        if( isFetching && !todos.length) {
            return <p>Loading...</p>
        }

        return <TodoList
            todos={todos}
            onTodoClick={toggleTodo}
        />
    };
}


const mapStateToProps = (state, ownprops) => {
    const filter = ownprops.filter || 'all';

    return {
        todos: getVisibleTodos(state, filter),
        isFetching:getIsFetching(state,filter),
        filter
    };
};

/*const mapDispatchToProps = (dispatch) => ({
    onTodoClick(id) {
        dispatch(toggleTodo(id))
    }
});*/

VisibleTodoList = connect( //withRouter to make PARAMS available to component
    mapStateToProps,
    actions//mapDispatchToProps
)(VisibleTodoList);

export default VisibleTodoList;

/*
 VisibleTodoList.contextTypes = {
 store: React.PropTypes.object
 };*/
