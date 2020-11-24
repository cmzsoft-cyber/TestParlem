import { 
        GET_CUSTOMERS, 
        GET_CUSTOMERS_ERROR,
        GET_CUSTOMERINFO,
        GET_CUSTOMERINFO_ERROR
} from '../../types/index'

export default (state, action) => {
    switch(action.type){
        case GET_CUSTOMERS:
            return{
                ...state,
                customers: action.payload
            }
        case GET_CUSTOMERS_ERROR:
        case GET_CUSTOMERINFO_ERROR:
            return{
                ...state,
                msg: action.payload
            }
        case GET_CUSTOMERINFO:
            return{
                ...state,
                customer: action.payload
            }
        default:
            return state
    }    
}