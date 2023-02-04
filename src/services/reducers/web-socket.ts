import { TWSActions } from "../actions/web-socket"
import * as ws from '../actions/web-socket'

type TWSState = {
    wsConnected: boolean
    messages: []
    error?: Event
}

const initialState: TWSState = {
    wsConnected: false,
    messages: []
}

export const wsReducer = (state = initialState, action: TWSActions) => {
    switch(action.type) {
        case ws.WS_CONNECTION_SUCCESS:
            return {
                ...state,
                error: undefined,
                wsConnected: true
            }
        case ws.WS_CONNECTION_FAILED:
            return {
                ...state,
                error: action.payload,
                wsConnected: false
            }
        case ws.WS_CONNECTION_CLOSED:
            return {
                ...state,
                error: undefined,
                wsConnected: false
            }
        case ws.WS_GET_MESSAGE:
            return {
                ...state,
                error: undefined,
                messages: [...state.messages, action.payload]
            }
        default:
            return state;
    }
}
