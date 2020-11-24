import React, { useContext, useEffect } from 'react'
import Layout from '../components/Layout'
import Error404 from '../components/404'
import customerContext from '../context/customer/customerContext'
import authContext from '../context/auth/authContext'
import Customer from '../components/Customer'
import { useRouter } from 'next/router';


const Customers = () => {

    // Define context
    const CustomerContext = useContext(customerContext)
    const { customers, getCustomers } = CustomerContext

    const AuthContext = useContext(authContext)
    const { user, auth } = AuthContext        
 
    useEffect(() => {
        const _getCustomers = () => {
            getCustomers()
        }
        _getCustomers()
    }, [])
    
    
    return ( 

        <Layout>

            { !user && !auth ? <Error404 /> : (

            <div className="flex flex-col px-4">

                <h1 className="text-2xl text-red-500 text-center mb-5">Clients</h1>

                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Nom
                                        </th>
                                        <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Email
                                        </th>
                                        <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Telèfon
                                        </th>        
                                        <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Perfil
                                        </th>                             
                                    </tr>
                                </thead>

                                <tbody className="bg-white divide-y divide-gray-200">

                                        { 
                                        
                                            customers.map(customer => (
                                                <Customer
                                                    key={customer.customerId}
                                                    customer={customer}
                                                />
                                                
                                            ))
                                            
                                        }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            )
        }

            
    </Layout>
    );
}
 
export default Customers;