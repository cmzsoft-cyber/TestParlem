import React, { useReducer } from 'react'
import productContext from './productContext'
import productReducer from './productReducer'
import { GET_PRODUCTSCUSTOMER, GET_PRODUCTSCUSTOMER_ERROR } from '../../types/index'

import clientAxios from '../../config/axios'

const ProductState = ({children}) => {

    const initialState = {
        products: [],
        msg: null
    }

    const [ state, dispatch ] = useReducer(productReducer, initialState)

    const getProductsByCustomerId = async (customerId) => {

        try {

            const res = await clientAxios.get(`/api/product/${customerId}`)          

            dispatch({
                type: GET_PRODUCTSCUSTOMER,
                payload: res.data.products
            })

        } catch (error) {
            dispatch({
                type: GET_PRODUCTSCUSTOMER_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    return(
        <productContext.Provider
            value={{
                products: state.products,
                msg: state.msg,
                getProductsByCustomerId
            }}
        >
            {children}
        </productContext.Provider>
    )
}

export default ProductState;