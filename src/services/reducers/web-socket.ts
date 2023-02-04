import { TWSActions } from "../actions/web-socket"
import * as ws from '../actions/web-socket'

export type TOrder = {
    _id: string
    ingredients: Array<string>
    status: string
    name: string
    createdAt: string
    updatedAt: string
    number: number
}

export type TMessage = {
    success: boolean
    orders: Array<TOrder>
    total: number
    totalToday: number
}

type TWSState = {
    wsConnected: boolean
    message: TMessage
    error?: Event
}

const initialState: TWSState = {
    wsConnected: false,
    message: {} as TMessage
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
                message: action.payload
            }
        default:
            return state;
    }
}
