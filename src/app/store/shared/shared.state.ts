export interface SharedState {
    setLoading: boolean,
    errorMessage: string
}

export const sharedInitalState: SharedState = {
    setLoading: false,
    errorMessage: ''
}