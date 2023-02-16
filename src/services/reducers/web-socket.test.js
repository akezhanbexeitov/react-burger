import * as ws from "../actions/web-socket"
import { wsReducer } from "./web-socket"

const initialState = {
    wsConnected: false,
    message: {} 
}

const testErrorMessage = 'Test error message'

const testMessage = {
    success: true,
    orders: [
        {
            _id: '123',
            name: 'Test order number 1'
        },
        {
            _id: '123',
            name: 'Test order number 2'
        }
    ],
    total: 40799,
    totalToday: 278
}

describe('Web socket reducer', () => {
    it('should return initial state', () => {
        expect(wsReducer(undefined, {})).toEqual(initialState)
    })

    it('should handle WS_CONNECTION_SUCCESS action', () => {
        expect(wsReducer(initialState, { type: ws.WS_CONNECTION_SUCCESS }))
            .toEqual({
                ...initialState,
                error: undefined,
                wsConnected: true
            })
    })

    it('should handle WS_CONNECTION_FAILED action', () => {
        expect(wsReducer(initialState, { 
            type: ws.WS_CONNECTION_FAILED,
            payload: testErrorMessage
        })).toEqual({
            ...initialState,
            error: testErrorMessage,
            wsConnected: false
        })
    })

    it('should handle WS_CONNECTION_CLOSED action', () => {
        expect(wsReducer(initialState, { 
            type: ws.WS_CONNECTION_CLOSED,
            payload: testErrorMessage
        })).toEqual({
            ...initialState,
            error: undefined,
            wsConnected: false,
            message: {}
        })
    })

    it('should handle WS_GET_MESSAGE action', () => {
        expect(wsReducer(initialState, { 
            type: ws.WS_GET_MESSAGE,
            payload: testMessage
        })).toEqual({
            ...initialState,
            error: undefined,
            message: testMessage
        })
    })
})
