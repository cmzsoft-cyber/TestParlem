import { GET_CUSTOMERS } from '../../types/index'

export default (state, action) => {
    switch(action.type){
        case GET_CUSTOMERS:
            return{
                ...state,
                customers: action.payload
            }
        case GET_CUSTOMERS_ERROR:
            return{
                ...state,
                msg: action.payload
            }
        default:
            return state
    }    
}