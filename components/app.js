import React from 'react';
import AddTodo from './addTodo/index';
import VisibleTodoList from './visibleTodoList/VisibleTodoList';
import Footer from './footer/Footer';


export default () => {
    return (
        <div>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </div>
    )
}