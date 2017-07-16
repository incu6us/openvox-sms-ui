import React from 'react';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import App from 'components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>
    , document.querySelector('#app')
);
