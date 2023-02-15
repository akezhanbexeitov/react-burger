import * as order from "../actions/order-details"
import orderDetailsReducer from "./order-details"

const initialState = {
    orderNumber: 0,
    orderRequest: false,
    orderFailed: false
}

const orderNumber = '40255'

describe('Order details reducer', () => {
    it('should return initial state', () => {
        expect(orderDetailsReducer(undefined, {})).toEqual(initialState)
    })

    it('should handle POST_ORDER_REQUEST action', () => {
        expect(orderDetailsReducer(initialState, { type: order.POST_ORDER_REQUEST }))
            .toEqual({
                ...initialState,
                orderRequest: true
            })
    })

    it('should handle POST_ORDER_SUCCESS action', () => {
        expect(orderDetailsReducer({
            ...initialState,
            orderRequest: true
        }, {
            type: order.POST_ORDER_SUCCESS,
            payload: {
                orderNumber: orderNumber
            }
        })).toEqual({
            orderNumber: orderNumber,
            orderRequest: false,
            orderFailed: false
        })
    })

    it('should handle POST_ORDER_FAILED action', () => {
        expect(orderDetailsReducer({
            ...initialState,
            orderRequest: true
        }, { type: order.POST_ORDER_FAILED })).toEqual({
            ...initialState,
            orderFailed: true,
            orderRequest: false
        })
    })
})