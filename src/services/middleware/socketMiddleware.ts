import * as ws from './../actions/web-socket';
import { Middleware, MiddlewareAPI } from "redux";
import { AppDispatch, RootState } from "../../utils/types";

export const socketMiddleware = (): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

  return next => (action: ws.TWSActions) => {
    const { dispatch } = store;    
    // @ts-ignore  
    const { type, payload } = action;

    if (type === ws.WS_CONNECTION_START) {
      socket = new WebSocket(payload.url);
    }
    if (socket) {
      socket.onopen = event => {
        dispatch({ type: ws.WS_CONNECTION_SUCCESS, payload: event });
      };

      socket.onerror = event => {
        dispatch({ type: ws.WS_CONNECTION_FAILED, payload: event });
      };

      socket.onmessage = event => {
        const { data } = event;

        dispatch({ type: ws.WS_GET_MESSAGE, payload: JSON.parse(data) });
      };

      socket.onclose = event => {
        dispatch({ type: ws.WS_CONNECTION_CLOSED, payload: event });
      };

      if (type === ws.WS_SEND_MESSAGE) {
        const message = payload;
        socket.send(JSON.stringify(message));
      }

      if (type === ws.WS_CONNECTION_CLOSE) {
        socket.close()
      }
    }
    next(action);
  };
  }) as Middleware;
};
