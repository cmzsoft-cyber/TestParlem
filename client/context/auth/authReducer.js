
import { 
    CREATE_USER_SUCCESS, 
    CREATE_USER_ERROR,
    CLEAN_ALERT,
    LOGIN_SUCCESS,
    LOGIN_ERROR,   
} from '../../types'

export default(state, action) =>  {
    switch(action.type){
        case CREATE_USER_SUCCESS:
        case CREATE_USER_ERROR:
        case LOGIN_ERROR:
            return{
                ...state,
                msg: action.payload
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload)
            return{
                ...state,
                token: action.payload,
                auth: true
            }
        case CLEAN_ALERT:
            return{
                ...state,
                msg: null
            }
        default: 
            return state
    }
}