import React from 'react';
import AddTodo from './addTodo/index';
import VisibleTodoList from './visibleTodoList/VisibleTodoList';
import Footer from './footer/Footer';


export default ({params}) => {
    return (
        <div>
            <AddTodo />
            <VisibleTodoList filter={params.filter || 'all'}/>
            <Footer />
        </div>
    )
}