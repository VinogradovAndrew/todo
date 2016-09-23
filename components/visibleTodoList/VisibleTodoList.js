import React,{ Component } from 'react';
import TodoList from './TodoList';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';
import {withRouter} from 'react-router';
import { getVisibleTodos } from '../../reducers/index';
import fetchTodos from '../../models/index';

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
        const {filter , receiveTodos} = this.props;

        fetchTodos(filter).then(todos=> {
            receiveTodos(filter, todos);
        })
    }

    render() {
        const {toggleTodo, ...rest} = this.props;

        return <TodoList
            {...rest}
            onTodoClick={toggleTodo}
        />
    };
}


const mapStateToProps = (state, ownprops) => {
    const filter = ownprops.filter || 'all';

    return {
        todos: getVisibleTodos(state, filter),
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
