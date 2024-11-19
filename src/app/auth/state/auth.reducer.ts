import { Action, createReducer, on } from "@ngrx/store"
import { AuthinitialState, AuthState } from "./auth.state"
import { lognSuccess } from "./auth.actions"

const _authReducer = createReducer(AuthinitialState,
    on(lognSuccess, (state, action) => {
        console.log(state, action)
        return {
            ...state,
            user: action.user
        }
    })
)

export function AuthReducer(state: AuthState | undefined, action: Action<string>) {
    return _authReducer(state, action)
}