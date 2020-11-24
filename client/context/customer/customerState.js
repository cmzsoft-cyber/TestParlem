import React, { useReducer } from 'react'
import customerContext from './customerContext'
import customerReducer from './customerReducer'
import { 
    GET_CUSTOMERS, 
    GET_CUSTOMERS_ERROR,
    GET_CUSTOMERINFO,
    GET_CUSTOMERINFO_ERROR
} from '../../types/index'

import clientAxios from '../../config/axios'

const CustomerState = ({children}) => {

    const initialState = {
        customers: [],
        customer: null,
        msg: null
    }

    const [ state, dispatch ] = useReducer(customerReducer, initialState)

    const getCustomers = async () => {

        try {

            const res = await clientAxios.get('/api/customer')          

            dispatch({
                type: GET_CUSTOMERS,
                payload: res.data.customers
            })

        } catch (error) {
            dispatch({
                type: GET_CUSTOMERS_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    const getCustomerInfo = async (id) => {
        try {

            const res = await clientAxios.get(`/api/customer/${id}`)          

            dispatch({
                type: GET_CUSTOMERINFO,
                payload: res.data.customer
            })

        } catch (error) {
            dispatch({
                type: GET_CUSTOMERINFO_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    return(
        <customerContext.Provider
            value={{
                customers: state.customers,
                customer: state.customer,
                msg: state.msg,
                getCustomers,
                getCustomerInfo
            }}
        >
            {children}
        </customerContext.Provider>
    )
}

export default CustomerState;