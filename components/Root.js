import React from 'react';
import App from './app';
import {Provider} from 'react-redux';
import {Router,Route,hashHistory,browserHistory} from 'react-router';

const Root = ({store}) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/(:filter)'  component={App} />
        </Router>
    </Provider>
);
/*
 Provider.childContextTypes = {
    store: React.PropTypes.object
 };
*/
export default Root;