import * as order from "../actions/order-details"

const initialState = {
    orderNumber: 0,
    orderRequest: false,
    orderFailed: false
}

const orderDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case order.POST_ORDER_REQUEST: {
            return {
                ...state,
                orderRequest: true
            }
        }
        case order.POST_ORDER_SUCCESS: {
            return {
                orderNumber: action.payload.orderNumber,
                orderRequest: false,
                orderFailed: false
            }
        }
        case order.POST_ORDER_FAILED: {
            return {
                ...state,
                orderFailed: true,
                orderRequest: false
            }
        }
        default: {
            return state
        }
    }
}

export default orderDetailsReducer
