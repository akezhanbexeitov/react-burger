import { Middleware, MiddlewareAPI } from "redux";
import { AppDispatch, RootState } from "../../utils/types";
import { TWSActions, WS_CONNECTION_CLOSE, WS_CONNECTION_CLOSED, WS_CONNECTION_FAILED, WS_CONNECTION_START, WS_CONNECTION_SUCCESS, WS_GET_MESSAGE, WS_SEND_MESSAGE } from "../actions/web-socket";

type TWSActionTypes = {
  wsInit: typeof WS_CONNECTION_START
  wsSendMessage: typeof WS_SEND_MESSAGE
  onOpen: typeof WS_CONNECTION_SUCCESS
  onClose: typeof WS_CONNECTION_CLOSED
  onError: typeof WS_CONNECTION_FAILED
  onMessage: typeof WS_GET_MESSAGE
  wsClose: typeof WS_CONNECTION_CLOSE
}

export const socketMiddleware = (wsActions: TWSActionTypes): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

  return next => (action: TWSActions) => {
    const { dispatch } = store;    
    // @ts-ignore  
    const { type, payload } = action;
    const { wsInit, wsSendMessage, onOpen, onClose, onError, onMessage, wsClose } = wsActions;

    if (type === wsInit) {
      socket = new WebSocket(payload.url);
    }
    if (socket) {
      socket.onopen = event => {
        dispatch({ type: onOpen, payload: event });
      };

      socket.onerror = event => {
        dispatch({ type: onError, payload: event });
      };

      socket.onmessage = event => {
        const { data } = event;

        dispatch({ type: onMessage, payload: JSON.parse(data) });
      };

      socket.onclose = event => {
        dispatch({ type: onClose, payload: event });
      };

      if (type === wsSendMessage) {
        const message = payload;
        socket.send(JSON.stringify(message));
      }

      if (type === wsClose) {
        socket.close()
      }
    }
    next(action);
  };
  }) as Middleware;
};
