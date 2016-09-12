import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../../actions/index';



let AddTodo = ({dispatch}) => {
    let myTextInput;
    return (
        <div>
            <input ref={(ref) => myTextInput = ref}/>
            <button
                onClick={() => {
                       dispatch(addTodo(myTextInput.value));
                       myTextInput.value='';
                       }}>
                Add Todo
            </button>
        </div>
    )
};

AddTodo = connect()(AddTodo);

export default AddTodo;
