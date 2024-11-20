export interface AuthResponseData {
    idToken: string
    email: string
    expiresIn: string
    refreshToken: string
    localId: string
    registered?: boolean
}