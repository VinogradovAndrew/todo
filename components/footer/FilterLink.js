/*import React from 'react';
import {connect} from 'react-redux';
import {setVisibilityFilter} from '../../actions/index';


const Link = ({active, children, onClick}) => {
    if (active) {
        return <span>{children}</span>
    }
    return (
        <a href="#"
           onClick={(e) => {
                e.preventDefault();
                onClick();
           }}
        >{children}</a>
    )
};


const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick(){
        dispatch(setVisibilityFilter(ownProps.filter))
    }
});

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;*/
import React from 'react';
import {Link} from 'react-router';

const FilterLink = ({filter , children}) => (

    <Link
        to={'todo_react/'+(filter === 'all' ? '' : filter)}
        activeStyle = {{
            textDecoration:'none',
            color:'black'
        }} > {children} </Link>
);

export default FilterLink;