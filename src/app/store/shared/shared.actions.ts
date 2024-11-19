import { createAction, props } from "@ngrx/store"

export const SET_LOADING_ACTION = '[shared] set loading'
export const SET_ERROR_MESSAGE = '[shared] error message'

export const setLoading = createAction(SET_LOADING_ACTION, props<{spinner: boolean}>())

export const setErrorMessage = createAction(SET_ERROR_MESSAGE, props<{message: string}>())