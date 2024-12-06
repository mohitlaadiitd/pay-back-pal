type sessionType = {
    isLoggedIn: boolean,
    loginAction: (data: UserLoginRequest) => void,
    logoutAction: () => void
}

type UserLoginRequest = {
    email: string,
    password: string
}

enum AuthResponse {
    SUCCESS,
    FAILURE
}