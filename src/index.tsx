import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './services/reducers';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import { socketMiddleware } from './services/middleware/socketMiddleware';
import * as ws from './services/actions/web-socket'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const wsActions = {
  wsInit: ws.WS_CONNECTION_START,
  wsSendMessage: ws.WS_SEND_MESSAGE,
  onOpen: ws.WS_CONNECTION_SUCCESS,
  onClose: ws.WS_CONNECTION_CLOSED,
  onError: ws.WS_CONNECTION_FAILED,
  onMessage: ws.WS_GET_MESSAGE,
  wsClose: ws.WS_CONNECTION_CLOSE
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware(wsActions)))
export const store = createStore(rootReducer, enhancer)

const root = ReactDOM.createRoot(
  document.getElementById('root')!
);
root.render(
  <Router>
    <React.StrictMode>
      <Provider store={ store }>
        <App />
      </Provider>
    </React.StrictMode>
  </Router>
);

reportWebVitals();
