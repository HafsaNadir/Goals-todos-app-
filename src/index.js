import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import reducers from './Reducers'
import middlewares from './Middlewares'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(reducers, middlewares)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
) 

