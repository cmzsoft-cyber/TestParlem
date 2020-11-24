import React, { useEffect, useContext, useState } from 'react'
import { useRouter } from 'next/router'
import productContext from '../../context/product/productContext'
import authContext from '../../context/auth/authContext'
import customerContext from '../../context/customer/customerContext'
import Layout from '../../components/Layout'
import Product from '../../components/Product'
import CustomerInfo from '../../components/CustomerInfo'
import Error404 from '../../components/404'

const Profile = () => {

    // Define context
    const AuthContext = useContext(authContext)
    const { user, auth } = AuthContext        

    const ProductContext = useContext(productContext)
    const { products, msg, getProductsByCustomerId} = ProductContext 

    const CustomerContext = useContext(customerContext)
    const { customer, getCustomerInfo } = CustomerContext

    // Routing customerId
    const router = useRouter();
    const { query: { id }} = router;
    
    useEffect(() => {
        if(id){
            const _getProductsByCustomerId = async () => {
                getProductsByCustomerId(id)              
            }
            const _getCustomerInfo = async () => {
                getCustomerInfo(id)
            }
            _getProductsByCustomerId()
            _getCustomerInfo()
        }
    }, [id])  

    return ( 

        <Layout>
            
            { !user || !auth ? <Error404 /> : (
                
            <>

                {/* CUSTOMER INFO */}

                <div className="px-4">

                    { customer ? (
                        <div>
                            <p className="text-2xl text-red-500 text-center mb-5">Informació del client</p>
                            <div className="container my-12 mx-auto">                            
                                <CustomerInfo 
                                    customer={customer}
                                />
                            </div>
                        </div>
                        ) : (
                            <p className="text-2xl text-red-500 text-center mb-5">Aquest client no té informació</p>
                        )
                    }

                </div>


                {/* PRODUCTS CARD */ }

                <div className="px-4">
                        
                    { Object.keys(products).length === 0 ? <p className="text-2xl text-red-500 text-center mb-5">Aquest client no té productes</p> : (
                        <>
                        <h2 className="text-2xl text-red-500 text-center mb-5">Productes contractats</h2>

                        <div className="container my-12 mx-auto">
                            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                                {
                                    products.map(product => (                                    
                                        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
                                            key={product._id}
                                        >
                                            <Product                                                    
                                                product={product}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        </>
                        )
                    }
                                

                </div>
            </>
            )

        }
            
        </Layout>        
    );
}
 
export default Profile;