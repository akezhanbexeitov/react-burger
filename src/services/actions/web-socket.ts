import { TMessage } from './../reducers/web-socket';
export const WS_CONNECTION_START: 'WS_CONNECTION_START' = 'WS_CONNECTION_START'
export const WS_CONNECTION_SUCCESS: 'WS_CONNECTION_SUCCESS' = 'WS_CONNECTION_SUCCESS'
export const WS_CONNECTION_FAILED: 'WS_CONNECTION_FAILED' = 'WS_CONNECTION_FAILED'
export const WS_GET_MESSAGE: 'WS_GET_MESSAGE' = 'WS_GET_MESSAGE'
export const WS_CONNECTION_CLOSED: 'WS_CONNECTION_CLOSED' = 'WS_CONNECTION_CLOSED'
export const WS_SEND_MESSAGE: 'WS_SEND_MESSAGE' = 'WS_SEND_MESSAGE'
export const WS_CONNECTION_CLOSE: 'WS_CONNECTION_CLOSE' = 'WS_CONNECTION_CLOSE'

export interface IWSConnectionStartAction {
    readonly type: typeof WS_CONNECTION_START
    payload: {
        url: string
    }
}

export interface IWSConnectionSuccessAction {
    readonly type: typeof WS_CONNECTION_SUCCESS
}

export interface IWSConnectionFailedAction {
    readonly type: typeof WS_CONNECTION_FAILED
    payload: Event
}

export interface IWSGetMessageAction {
    readonly type: typeof WS_GET_MESSAGE
    payload: TMessage
}

export interface IWSConnectionClosedAction {
    readonly type: typeof WS_CONNECTION_CLOSED
}

export interface IWSSendMessageAction {
    readonly type: typeof WS_SEND_MESSAGE
}

export interface IWSConnectionCloseAction {
    readonly type: typeof WS_CONNECTION_CLOSE
}

export type TWSActions = 
    | IWSConnectionStartAction
    | IWSConnectionSuccessAction
    | IWSConnectionFailedAction
    | IWSGetMessageAction
    | IWSConnectionClosedAction
    | IWSSendMessageAction
    | IWSConnectionCloseAction
