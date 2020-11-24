import React from 'react';
import Link from 'next/link'

const Customer = ({customer}) => {

    const { email, customerId, givenName, phone} = customer;   

    return ( 
        
        <Link href="/customer/[id]" as={`/customer/${customerId}`}>

            <tr className="row-customer-list">
                <td className="px-6 py-4 whitespace-nowrap">               
                    <div className="text-sm text-gray-900">
                        { givenName }
                    </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                        { email }
                    </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                        { phone }
                    </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Actiu
                    </span>
                </td>
           
            </tr>         
        </Link>       
       
    );
}
 
export default Customer;