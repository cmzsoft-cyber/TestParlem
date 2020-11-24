import { GET_PRODUCTSCUSTOMER, GET_PRODUCTSCUSTOMER_ERROR  } from '../../types/index'

export default (state, action) => {
    switch(action.type){
        case GET_PRODUCTSCUSTOMER:
            return{
                ...state,
                products: action.payload
            }
        case GET_PRODUCTSCUSTOMER_ERROR:
            return{
                ...state,
                msg: action.payload
            }
        default:
            return state
    }    
}