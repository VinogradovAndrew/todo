import React from 'react';
import Todo from './Todo';

export default ({todos,onTodoClick}) => (
    <ul>
        {todos.map((todo) => <Todo key={todo.id}
            {...todo}
            onClick={()=>onTodoClick(todo.id)}
            />
        )}
    </ul>
)


/*

console.log(store);
console.log(store.getState());


const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
    }
}



export default ({}) => {
    let state = store.getState();
    return (
        <ul>
            {
                getVisibleTodos(state.todos,state.visiblityFilter).map((todo) => {
                    return <Todo
                        key={todo.id}
                        completed={todo.completed}
                        onClick={()=>{store.dispatch({
                            type:'TOGGLE_TODO',
                            id:todo.id
                        })}}
                        text={todo.text} />
                })
            }
        </ul>
    )
}*/
