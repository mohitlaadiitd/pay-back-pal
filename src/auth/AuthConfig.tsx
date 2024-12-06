import axios from 'axios';
import { useContext, createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({} as sessionType);

const AuthProvider = ({ children }: any) => {
    const navigate = useNavigate();

    const login: (data: UserLoginRequest) => void = async (data) => {
        try {
            const response = await axios.post("http://localhost:8080/auth/api/login", data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status !== 200) {
                throw new Error('Login failed');
            }
            if (response.data) {
                localStorage.setItem('token', response.data);
                setSessionState({ ...SessionState, isLoggedIn: true });
                navigate('/');
            }
            console.log(response);
            setSessionState({ ...SessionState, isLoggedIn: true });
        }
        catch (error) {
            console.log(error);
        }
    }

    const logout = () => {
        setSessionState({ ...SessionState, isLoggedIn: false });
        localStorage.removeItem('token');
        navigate('/login');
    }

    const [SessionState, setSessionState] = useState({
        isLoggedIn: false,
        loginAction: login,
        logoutAction: logout
    });


    return (
        <AuthContext.Provider value={SessionState}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
}
