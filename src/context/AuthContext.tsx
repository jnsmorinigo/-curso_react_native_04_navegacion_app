import React, { createContext, useReducer } from 'react'
import { authReducer } from './AuthReducer';

//Definir como luce, la informacion que tendre aqui
export interface AuthState {
    isLoggedIn: boolean;
    userName?: string;
    favoriteIcon?: string;
}

// Estado actual
export const authInitialState: AuthState = {
    isLoggedIn: false,
    userName: undefined,
    favoriteIcon: undefined,
}

//interface del context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    logout: () => void;
    changeUserName: (userName: string) => void;
}

// Crear el contexto
export const AuthContext = createContext({

} as AuthContextProps);

// componente proveedor del estado
export const AuthProvider = ({ children }: { children: any }) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState)

    const signIn = () => {
        dispatch({ type: 'signIn' });
    }

    const changeFavoriteIcon = (iconName: string) => {
        dispatch({ type: 'chageFavIcon', payload: iconName })
    }

    const logout = () => {
        dispatch({ type: 'logout' })
    }

    const changeUserName = (userName: string) => {
        dispatch({ type: 'changeUserName', payload: userName })
    }
    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            logout,
            changeFavoriteIcon,
            changeUserName,
        }}>
            {children}
        </AuthContext.Provider>
    );
}