import * as auth from "../actions/auth"
import authReducer from "./auth"

const initialState = {
    isAuthChecked: false,
    user: {},
    registerUserRequest: false,
    registerUserFailed: false,
    loginUserRequest: false,
    loginUserFailed: false,
    getUserRequest: false,
    getUserFailed: false,
    updateUserRequest: false,
    updateUserFailed: false,
    forgotPasswordRequest: false
}

const testUser = {
    email: 'something@something.ru',
    name: 'Something Test'
}

describe('Auth reducer', () => {
    it('should return initial state', () => {
        expect(authReducer(undefined, {})).toEqual(initialState)
    })

    it('should handle REGISTER_USER_REQUEST action', () => {
        expect(authReducer(initialState, { type: auth.REGISTER_USER_REQUEST }))
            .toEqual({
                ...initialState,
                registerUserRequest: true,
                registerUserFailed: false
            })
    })

    it('should handle REGISTER_USER_SUCCESS action', () => {
        expect(authReducer(initialState, { 
            type: auth.REGISTER_USER_SUCCESS,
            payload: {
                user: testUser
            }
        })).toEqual({
            ...initialState,
            isAuthChecked: true,
            registerUserRequest: false,
            user: testUser
        })
    })

    it('should handle REGISTER_USER_FAILED action', () => {
        expect(authReducer(initialState, { type: auth.REGISTER_USER_FAILED }))
            .toEqual({
                ...initialState,
                registerUserFailed: true,
                registerUserRequest: false
            })
    })

    it('should handle LOGIN_USER_REQUEST action', () => {
        expect(authReducer(initialState, { type: auth.LOGIN_USER_REQUEST }))
            .toEqual({
                ...initialState,
                loginUserRequest: true,
                loginUserFailed: false
            })
    })

    it('should handle LOGIN_USER_SUCCESS action', () => {
        expect(authReducer(initialState, { 
            type: auth.LOGIN_USER_SUCCESS,
            payload: {
                user: testUser
            }
        })).toEqual({
            ...initialState,
            isAuthChecked: true,
            loginUserRequest: false,
            user: testUser,
        })
    })

    it('should handle LOGIN_USER_FAILED action', () => {
        expect(authReducer(initialState, { type: auth.LOGIN_USER_FAILED }))
            .toEqual({
                ...initialState,
                loginUserFailed: true,
                loginUserRequest: false
            })
    })

    it('should handle GET_USER_REQUEST action', () => {
        expect(authReducer(initialState, { type: auth.GET_USER_REQUEST }))
            .toEqual({
                ...initialState,
                getUserRequest: true,
                getUserFailed: false
            })
    })

    it('should handle GET_USER_SUCCESS action', () => {
        expect(authReducer(initialState, { 
            type: auth.GET_USER_SUCCESS,
            payload: {
                user: testUser
            }
        })).toEqual({
            ...initialState,
            isAuthChecked: true,
            getUserRequest: false,
            user: testUser
        })
    })

    it('should handle GET_USER_FAILED action', () => {
        expect(authReducer(initialState, { type: auth.GET_USER_FAILED }))
            .toEqual({
                ...initialState,
                getUserFailed: true,
                getUserRequest: false
            })
    })

    it('should handle UPDATE_USER_REQUEST action', () => {
        expect(authReducer(initialState, { type: auth.UPDATE_USER_REQUEST }))
            .toEqual({
                ...initialState,
                updateUserRequest: true,
                updateUserFailed: false
            })
    })

    it('should handle UPDATE_USER_SUCCESS action', () => {
        expect(authReducer(initialState, { 
            type: auth.UPDATE_USER_SUCCESS,
            payload: {
                user: testUser
            }
        })).toEqual({
            ...initialState,
            isAuthChecked: true,
            updateUserRequest: false,
            user: testUser
        })
    })

    it('should handle UPDATE_USER_FAILED action', () => {
        expect(authReducer(initialState, { type: auth.UPDATE_USER_FAILED }))
            .toEqual({
                ...initialState,
                updateUserFailed: true,
                updateUserRequest: false
            })
    })

    it('should handle FORGOT_PASSWORD_REQUEST action', () => {
        expect(authReducer(initialState, { type: auth.FORGOT_PASSWORD_REQUEST }))
            .toEqual({
                ...initialState,
                forgotPasswordRequest: true
            })
    })

    it('should handle AUTH_CHECKED action', () => {
        expect(authReducer(initialState, { type: auth.AUTH_CHECKED }))
            .toEqual({
                ...initialState,
                isAuthChecked: true
            })
    })

    it('should handle LOGOUT_USER action', () => {
        expect(authReducer(initialState, { type: auth.LOGOUT_USER }))
            .toEqual({
                ...initialState,
                user: {},
                isAuthChecked: false
            })
    })
})