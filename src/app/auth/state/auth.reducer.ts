import { Action, createReducer, on } from "@ngrx/store"
import { AuthinitialState, AuthState } from "./auth.state"
import { lognSuccess, logout, signupSuccess } from "./auth.actions"

const _authReducer = createReducer(AuthinitialState,
    on(lognSuccess, (state, action) => {
        return {
            ...state,
            user: action.user
        }
    }),
    on(signupSuccess, (state, action) => {
        return {
            ...state,
            user: action.user
        }
    }),
    on(logout, (state) => {
        return {
            ...state,
            user: null
        }
    })
)

export function AuthReducer(state: AuthState | undefined, action: Action<string>) {
    return _authReducer(state, action)
}