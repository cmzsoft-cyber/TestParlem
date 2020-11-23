import React, { useReducer } from 'react'
import authContext from './authContext'
import authReducer from './authReducer'

import {      
    CREATE_USER_SUCCESS,
    CREATE_USER_ERROR,
    CLEAN_ALERT,
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from '../../types'

import axiosClient from '../../config/axios'

const AuthState= ({children}) => {

    // Define initial state
    const initialState = {
        token: typeof window !== 'undefined' ? localStorage.getItem('token') : null,
        auth: null,
        user: null,
        msg: null
    }

    // Define reducer
    const [ state, dispatch ] = useReducer(authReducer, initialState)

    // create User 
    const createUser = async data => {
        
    }

    // Auth Users 
    const initSession = async data => {       

    }

    // Auth User 
    const authUser = nombre => {
      
    }

    return ( 
        <authContext.Provider
            value={{
                token: state.token,
                auth: state.auth,
                user: state.user,
                msg: state.msg,
                createUser,
                initSession,
                authUser
            }}
        >
            { children }
        </authContext.Provider>
    );
}
 
export default AuthState;