import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import contactReducer from './components/redux/reducers/contactReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(contactReducer, composeWithDevTools())

ReactDOM.render(
  <Provider store={ store }>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
