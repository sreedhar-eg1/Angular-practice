import { createReducer, on } from "@ngrx/store"
import { sharedInitalState } from "./shared.state"
import { setErrorMessage, setLoading } from "./shared.actions"

const _sharedReducer = createReducer(sharedInitalState, 
    on(setLoading, (state, action) => {
        return {
            ...state,
            setLoading: action.spinner
        }
    }),
on(setErrorMessage, (state, action) => {
    return {
        ...state,
        errorMessage: action.message
    }
}))

export function sharedReducer(state: any, action: any) {
    return _sharedReducer(state, action)
}