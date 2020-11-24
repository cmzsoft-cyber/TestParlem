import React, { useReducer } from 'react'
import authContext from './authContext'
import authReducer from './authReducer'

import {      
    CREATE_USER_SUCCESS,
    CREATE_USER_ERROR,
    CLEAN_ALERT,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    USER_AUTH,
    CLOSE_SESSION
} from '../../types'

import axiosClient from '../../config/axios'
import tokenAuth from '../../config/tokenAuth'

const AuthState= ({children}) => {

    // Define initial state
    const initialState = {
        token: typeof window !== 'undefined' ? localStorage.getItem('token') : '',
        auth: null,
        user: null,
        msg: null
    }

    // Define reducer
    const [ state, dispatch ] = useReducer(authReducer, initialState)

    // create User 
    const createUser = async data => {
        try {
            const res = await axiosClient.post("/api/user", data)
            dispatch({
                type: CREATE_USER_SUCCESS,
                payload: res.data.msg
            })            
        } catch (error) {           
            dispatch({
                type: CREATE_USER_ERROR,
                payload: error.response.data.msg
            })
        }  
        
        // Clean Alert
        setTimeout(() => {
            dispatch({
                type: CLEAN_ALERT
            })
        }, 3000)
    }

    // Auth Users 
    const initSession = async data => {       
        try {
            const res = await axiosClient.post('/api/auth', data)             
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data.token
            })
        } catch (error) {          
            dispatch({
                type: LOGIN_ERROR,
                payload: error.response.data.msg
            })
        }

        // Clean Alert
        setTimeout(() => {
            dispatch({
                type: CLEAN_ALERT
            })
        }, 3000)
    }

    // Auth User 
    const authUser = async () => {

        const token = localStorage.getItem('token');

        if(token) {           
            tokenAuth(token)
        }

        try {
            const res = await axiosClient.get('/api/auth');        
            if(res.data.user) {
                dispatch({
                    type: USER_AUTH,
                    payload: res.data.user
                }) 
            }

        } catch (error) {
            dispatch({
                type: LOGIN_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    // Cerrar la sesión
    const closeSession = () => {
        dispatch({
            type: CLOSE_SESSION
        })
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
                authUser,
                closeSession
            }}
        >
            { children }
        </authContext.Provider>
    );
}
 
export default AuthState;